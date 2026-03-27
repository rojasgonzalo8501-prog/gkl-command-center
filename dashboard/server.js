#!/usr/bin/env node
const http    = require('http');
const fs      = require('fs');
const path    = require('path');
const { exec } = require('child_process');

const PORT       = process.env.PORT || 3737;
const ROOT       = path.join(__dirname, '..');
const AGENCY_DIR = path.join(ROOT, 'gkl-agency');
const DATA       = process.env.DATA_DIR || __dirname;

const FILES = {
  activity: path.join(DATA, 'activity.json'),
  agents:   path.join(DATA, 'agents.json'),
  tokens:   path.join(DATA, 'tokens.json'),
  tasks:    path.join(DATA, 'tasks.json'),
  links:    path.join(DATA, 'links.json'),
};

const PRICE_IN = 3.00, PRICE_OUT = 15.00;
const calcCost = (i, o) => ((i/1e6)*PRICE_IN) + ((o/1e6)*PRICE_OUT);

function initFile(fp, def) {
  if (!fs.existsSync(fp)) fs.writeFileSync(fp, JSON.stringify(def, null, 2));
}

initFile(FILES.activity, [{ id:1, ts: new Date().toISOString(), project:'system', type:'system', msg:'Command Center initialized' }]);
initFile(FILES.agents,   []);
initFile(FILES.tokens,   []);
initFile(FILES.tasks,    []);
initFile(FILES.links,    {});

const readJSON  = fp => { try { return JSON.parse(fs.readFileSync(fp,'utf8')); } catch { return Array.isArray([]) ? [] : {}; } };
const writeJSON = (fp, d) => fs.writeFileSync(fp, JSON.stringify(d, null, 2));
const readBody  = req => new Promise((res, rej) => {
  let b=''; req.on('data',d=>b+=d); req.on('end',()=>{ try{res(JSON.parse(b))}catch(e){rej(e)} });
});

// ── MIME types ────────────────────────────────────────────
const MIME = {
  '.html':'text/html','.css':'text/css','.js':'application/javascript',
  '.json':'application/json','.png':'image/png','.jpg':'image/jpeg',
  '.svg':'image/svg+xml','.ico':'image/x-icon','.woff2':'font/woff2','.ttf':'font/ttf'
};

// ── File scanner ──────────────────────────────────────────
function getFilesFlat(dir, baseDir, excludes=[]) {
  const results = [];
  function walk(cur) {
    let entries; try { entries = fs.readdirSync(cur,{withFileTypes:true}); } catch { return; }
    for (const e of entries) {
      if (e.name.startsWith('.') || excludes.includes(e.name)) continue;
      const full = path.join(cur, e.name);
      if (e.isDirectory()) { walk(full); }
      else { try { const s = fs.statSync(full); results.push({ name:e.name, path:path.relative(baseDir,full), mtime:s.mtime.toISOString(), size:s.size }); } catch {} }
    }
  }
  walk(dir); return results.sort((a,b)=>new Date(b.mtime)-new Date(a.mtime));
}

function getProjectData() {
  const clients = ['andasuthemma','exhaleplr','gkl-agency','merca-skroten','yaloyoga'];
  const projects = {};
  for (const client of clients) {
    const files = getFilesFlat(path.join(AGENCY_DIR,'clients',client), AGENCY_DIR, ['node_modules']);
    const delivFiles = [];
    function walkD(d) {
      try { for (const e of fs.readdirSync(d,{withFileTypes:true})) {
        if (e.name.startsWith('.')) continue;
        const full = path.join(d,e.name);
        if (e.isDirectory()) walkD(full);
        else { try { const s=fs.statSync(full); delivFiles.push({name:e.name,path:path.relative(AGENCY_DIR,full),mtime:s.mtime.toISOString(),size:s.size}); } catch {} }
      }} catch {}
    }
    const dw = path.join(AGENCY_DIR,'deliverables','websites');
    if (fs.existsSync(path.join(dw,client)))         walkD(path.join(dw,client));
    if (fs.existsSync(path.join(dw,client+'-crm')))  walkD(path.join(dw,client+'-crm'));
    projects[client] = { clientFiles:files, deliverables:delivFiles.sort((a,b)=>new Date(b.mtime)-new Date(a.mtime)) };
  }
  const workflows = getFilesFlat(path.join(AGENCY_DIR,'workflows'), AGENCY_DIR);
  const allFiles  = getFilesFlat(AGENCY_DIR, AGENCY_DIR, ['node_modules','marketing-skills']).slice(0,40);
  return { projects, workflows, allFiles };
}

function tokenSummary() {
  const entries = readJSON(FILES.tokens);
  const totals = { tokens_in:0, tokens_out:0, cost:0, by_project:{}, by_model:{} };
  for (const e of entries) {
    const i=e.tokens_in||0, o=e.tokens_out||0;
    totals.tokens_in+=i; totals.tokens_out+=o; totals.cost+=calcCost(i,o);
    if (!totals.by_project[e.project]) totals.by_project[e.project]={tokens_in:0,tokens_out:0,cost:0};
    totals.by_project[e.project].tokens_in+=i; totals.by_project[e.project].tokens_out+=o; totals.by_project[e.project].cost+=calcCost(i,o);
    const m=e.model||'claude-sonnet-4-6';
    if (!totals.by_model[m]) totals.by_model[m]={tokens_in:0,tokens_out:0,cost:0};
    totals.by_model[m].tokens_in+=i; totals.by_model[m].tokens_out+=o; totals.by_model[m].cost+=calcCost(i,o);
  }
  totals.total_tokens=totals.tokens_in+totals.tokens_out;
  return { totals, entries:entries.slice(-200).reverse() };
}

// ── Search ────────────────────────────────────────────────
function search(q) {
  if (!q || q.length < 2) return { files:[], activity:[] };
  const ql = q.toLowerCase();
  const allFiles = getFilesFlat(AGENCY_DIR, AGENCY_DIR, ['node_modules']);
  const files = allFiles.filter(f => f.path.toLowerCase().includes(ql) || f.name.toLowerCase().includes(ql)).slice(0,20);
  const activity = readJSON(FILES.activity).filter(a => (a.msg||'').toLowerCase().includes(ql) || (a.project||'').toLowerCase().includes(ql)).slice(-20).reverse();
  return { files, activity };
}

// ── Router ────────────────────────────────────────────────
async function serve(req, res) {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  const json = (d, s=200) => { res.writeHead(s,{'Content-Type':'application/json'}); res.end(JSON.stringify(d)); };

  // ── Dashboard HTML ──
  if (url.pathname === '/' || url.pathname === '/index.html') {
    fs.readFile(path.join(DATA,'index.html'),'utf8',(err,data)=>{
      if (err){res.writeHead(500);res.end('not found');return;}
      res.writeHead(200,{'Content-Type':'text/html'}); res.end(data);
    }); return;
  }

  // ── Serve agency files (for inline preview) ──
  if (url.pathname.startsWith('/sites/')) {
    const rel   = url.pathname.replace('/sites/','').replace(/\.\./g,'');
    const full  = path.join(AGENCY_DIR, rel);
    const ext   = path.extname(full).toLowerCase();
    const mime  = MIME[ext] || 'application/octet-stream';
    fs.readFile(full, (err, data) => {
      if (err) { res.writeHead(404); res.end('not found'); return; }
      res.writeHead(200, { 'Content-Type': mime }); res.end(data);
    }); return;
  }

  // ── Open file natively (macOS open) ──
  if (url.pathname === '/api/open' && req.method === 'GET') {
    const p    = url.searchParams.get('path');
    const flag = url.searchParams.get('finder') === '1' ? '-R ' : '';
    if (!p) { json({error:'no path'},400); return; }
    const full = path.join(AGENCY_DIR, p.replace(/\.\./g,''));
    exec(`open ${flag}"${full}"`, err => {
      if (err) { json({error:err.message},500); return; }
      json({ ok:true });
    }); return;
  }

  // ── API data ──
  if (url.pathname === '/api/data' && req.method === 'GET') {
    try { json(getProjectData()); } catch(e) { json({error:e.message},500); } return;
  }

  // ── Tokens ──
  if (url.pathname === '/api/tokens') {
    if (req.method === 'GET') { json(tokenSummary()); return; }
    if (req.method === 'POST') {
      try { const e=await readBody(req); const i=e.tokens_in||0,o=e.tokens_out||0; const t=readJSON(FILES.tokens); t.push({id:Date.now(),ts:new Date().toISOString(),cost:calcCost(i,o),model:'claude-sonnet-4-6',...e}); writeJSON(FILES.tokens,t); json({ok:true}); } catch(e){json({error:e.message},400);}
      return;
    }
  }

  // ── Activity ──
  if (url.pathname === '/api/activity') {
    if (req.method === 'GET') { json(readJSON(FILES.activity).slice(-120).reverse()); return; }
    if (req.method === 'POST') {
      try { const e=await readBody(req); const log=readJSON(FILES.activity); log.push({id:Date.now(),ts:new Date().toISOString(),...e}); writeJSON(FILES.activity,log); json({ok:true}); } catch(e){json({error:e.message},400);}
      return;
    }
  }

  // ── Agents ──
  if (url.pathname === '/api/agents') {
    if (req.method === 'GET') { json(readJSON(FILES.agents).slice(-100).reverse()); return; }
    if (req.method === 'POST') {
      try { const e=await readBody(req); const agents=readJSON(FILES.agents); const a={id:Date.now(),ts_start:new Date().toISOString(),ts_end:null,status:'running',project:'system',type:'general-purpose',task:'',tokens_in:0,tokens_out:0,cost:0,model:'claude-sonnet-4-6',result:null,...e}; agents.push(a); writeJSON(FILES.agents,agents); json({ok:true,id:a.id}); } catch(e){json({error:e.message},400);}
      return;
    }
    if (req.method === 'PATCH') {
      try {
        const u=await readBody(req); const agents=readJSON(FILES.agents); const idx=agents.findIndex(a=>a.id==u.id);
        if (idx===-1){json({error:'not found'},404);return;}
        agents[idx]={...agents[idx],...u};
        if (u.status==='completed'||u.status==='failed') {
          agents[idx].ts_end=new Date().toISOString();
          const i=agents[idx].tokens_in||0, o=agents[idx].tokens_out||0;
          agents[idx].cost=calcCost(i,o);
          const t=readJSON(FILES.tokens); t.push({id:Date.now(),ts:new Date().toISOString(),project:agents[idx].project,agent_type:agents[idx].type,task:agents[idx].task,tokens_in:i,tokens_out:o,cost:agents[idx].cost,model:agents[idx].model||'claude-sonnet-4-6'}); writeJSON(FILES.tokens,t);
        }
        writeJSON(FILES.agents,agents); json({ok:true});
      } catch(e){json({error:e.message},400);}
      return;
    }
  }

  // ── Tasks (kanban) ──
  if (url.pathname === '/api/tasks') {
    if (req.method === 'GET') { const p=url.searchParams.get('project'); const all=readJSON(FILES.tasks); json(p ? all.filter(t=>t.project===p) : all); return; }
    if (req.method === 'POST') {
      try { const e=await readBody(req); const tasks=readJSON(FILES.tasks); const t={id:Date.now(),ts:new Date().toISOString(),status:'todo',project:'system',title:'',priority:'medium',...e}; tasks.push(t); writeJSON(FILES.tasks,tasks); json({ok:true,id:t.id}); } catch(e){json({error:e.message},400);}
      return;
    }
    if (req.method === 'PATCH') {
      try { const u=await readBody(req); const tasks=readJSON(FILES.tasks); const idx=tasks.findIndex(t=>t.id==u.id); if(idx===-1){json({error:'not found'},404);return;} tasks[idx]={...tasks[idx],...u,updated:new Date().toISOString()}; writeJSON(FILES.tasks,tasks); json({ok:true}); } catch(e){json({error:e.message},400);}
      return;
    }
    if (req.method === 'DELETE') {
      try { const u=await readBody(req); const tasks=readJSON(FILES.tasks).filter(t=>t.id!=u.id); writeJSON(FILES.tasks,tasks); json({ok:true}); } catch(e){json({error:e.message},400);}
      return;
    }
  }

  // ── Links ──
  if (url.pathname === '/api/links') {
    if (req.method === 'GET') { const p=url.searchParams.get('project'); const all=readJSON(FILES.links); json(p ? (all[p]||[]) : all); return; }
    if (req.method === 'POST') {
      try { const {project,label,url:u}=await readBody(req); const links=readJSON(FILES.links); if(!links[project])links[project]=[]; links[project].push({id:Date.now(),label,url:u}); writeJSON(FILES.links,links); json({ok:true}); } catch(e){json({error:e.message},400);}
      return;
    }
    if (req.method === 'DELETE') {
      try { const {project,id}=await readBody(req); const links=readJSON(FILES.links); if(links[project])links[project]=links[project].filter(l=>l.id!=id); writeJSON(FILES.links,links); json({ok:true}); } catch(e){json({error:e.message},400);}
      return;
    }
  }

  // ── Search ──
  if (url.pathname === '/api/search' && req.method === 'GET') {
    json(search(url.searchParams.get('q'))); return;
  }

  res.writeHead(404); res.end('not found');
}

const server = http.createServer(serve);
server.listen(PORT, () => console.log(`\n  GKL Command Center  →  http://localhost:${PORT}\n`));
