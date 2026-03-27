#!/usr/bin/env node
const http    = require('http');
const fs      = require('fs');
const path    = require('path');
const { exec } = require('child_process');

const PORT       = process.env.PORT || 3737;
const ROOT       = path.join(__dirname, '..');
const AGENCY_DIR = path.join(ROOT, 'gkl-agency');
const STATIC     = __dirname;  // always read static files (index.html) from here
// On Render (read-only deploy dir), write JSON data to /tmp unless DATA_DIR is set
const DATA       = process.env.DATA_DIR || (process.env.NODE_ENV === 'production' ? '/tmp' : __dirname);

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
    fs.readFile(path.join(STATIC,'index.html'),'utf8',(err,data)=>{
      if (err){res.writeHead(500);res.end('not found');return;}
      res.writeHead(200,{'Content-Type':'text/html'}); res.end(data);
    }); return;
  }

  // ── Proposals portal ──
  if (url.pathname === '/proposals') {
    const clientsDir = path.join(AGENCY_DIR, 'clients');
    const meta = {
      andasuthemma: { name:'Andasuthemma', emoji:'🏋️', tag:'Personal Training & Wellness Coaching', color:'#ffa657' },
      exhaleplr:    { name:'Exhale PLR',   emoji:'🧘', tag:'Breathwork & Mindfulness Platform',    color:'#79c0ff' },
      'gkl-agency': { name:'GKL Agency',   emoji:'🏢', tag:'Agency Brand & Website',               color:'#f78166' },
      'merca-skroten': { name:'Merca Skroten', emoji:'🚗', tag:'Bilskrot & Mercedes-delar — Enköping', color:'#3fb950' },
      yaloyoga:     { name:'Yalo Yoga',    emoji:'🌿', tag:'Sustainable Cork Yoga Brand',           color:'#00e5a0' },
    };
    let cards = '';
    try {
      const dirs = fs.readdirSync(clientsDir, { withFileTypes: true })
        .filter(e => e.isDirectory())
        .map(e => e.name);
      for (const dir of dirs) {
        const pFile = path.join(clientsDir, dir, 'proposal.html');
        if (!fs.existsSync(pFile)) continue;
        const m = meta[dir] || { name: dir, emoji: '📄', tag: 'Proposal', color: '#8b949e' };
        const stat = fs.statSync(pFile);
        const updated = stat.mtime.toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });
        cards += `
        <a class="card" href="/sites/clients/${dir}/proposal.html" target="_blank" style="--accent:${m.color}">
          <div class="card-emoji">${m.emoji}</div>
          <div class="card-body">
            <div class="card-name">${m.name}</div>
            <div class="card-tag">${m.tag}</div>
            <div class="card-meta">Updated ${updated}</div>
          </div>
          <div class="card-arrow">→</div>
        </a>`;
      }
    } catch(e) { cards = '<p style="color:#8b949e">No proposals found.</p>'; }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>GKL Agency — Proposals</title>
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0d1117;color:#e6edf3;min-height:100vh;padding:0}
  header{background:#161b22;border-bottom:1px solid #30363d;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
  .logo{font-size:15px;font-weight:700;color:#e6edf3;letter-spacing:-.3px}
  .logo span{color:#f78166}
  .badge{font-size:11px;background:rgba(247,129,102,.1);color:#f78166;border:1px solid rgba(247,129,102,.2);padding:3px 10px;border-radius:20px;font-weight:600}
  main{max-width:720px;margin:0 auto;padding:48px 20px 80px}
  h1{font-size:28px;font-weight:700;margin-bottom:6px}
  .sub{color:#8b949e;font-size:14px;margin-bottom:36px}
  .grid{display:flex;flex-direction:column;gap:12px}
  .card{display:flex;align-items:center;gap:16px;background:#161b22;border:1px solid #30363d;border-radius:12px;padding:20px 20px;text-decoration:none;color:inherit;transition:border-color .15s,transform .1s,background .15s;border-left:3px solid var(--accent)}
  .card:hover{border-color:var(--accent);background:#1c2128;transform:translateX(3px)}
  .card-emoji{font-size:28px;flex-shrink:0;width:44px;text-align:center}
  .card-body{flex:1;min-width:0}
  .card-name{font-size:16px;font-weight:700;margin-bottom:3px}
  .card-tag{font-size:13px;color:#8b949e;margin-bottom:4px}
  .card-meta{font-size:11px;color:#484f58}
  .card-arrow{font-size:18px;color:#30363d;flex-shrink:0;transition:color .15s,transform .15s}
  .card:hover .card-arrow{color:var(--accent);transform:translateX(4px)}
  footer{text-align:center;padding:24px;font-size:12px;color:#484f58;border-top:1px solid #21262d;position:fixed;bottom:0;width:100%;background:#0d1117}
  @media(max-width:480px){h1{font-size:22px}.card{padding:16px}}
</style>
</head>
<body>
<header>
  <div class="logo">GKL<span>Agency</span></div>
  <div class="badge">Client Proposals</div>
</header>
<main>
  <h1>Growth Proposals</h1>
  <p class="sub">All active client proposals. Click to open the full proposal.</p>
  <div class="grid">${cards}</div>
</main>
<footer>GKL Agency · Confidential · ${new Date().getFullYear()}</footer>
</body>
</html>`;
    res.writeHead(200, { 'Content-Type': 'text/html' }); res.end(html); return;
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
