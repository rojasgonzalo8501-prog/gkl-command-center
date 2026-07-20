window.clamp=x=>Math.max(0,Math.min(1,x));
window.p=(t,a,b)=>clamp((t-a)/(b-a));
window.eOut=x=>1-Math.pow(1-x,3);
window.eIn=x=>x*x*x;
window.eInOut=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
window.eBack=x=>{const c=1.70158;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2);};
window.lerp=(a,b,x)=>a+(b-a)*x;
window.$=s=>document.querySelector(s);
window.$$=s=>document.querySelectorAll(s);
window.brandIn=t=>{const b=eOut(p(t,150,850));const el=$('#brand');el.style.opacity=b;el.style.transform=`translateY(${lerp(-24,0,b)}px)`;};
window.glowDrift=t=>{const d=t/1000;const a=$('#gA'),b=$('#gB');
  if(a)a.style.transform=`translate(${Math.sin(d*.6)*40}px,${Math.cos(d*.5)*30}px)`;
  if(b)b.style.transform=`translate(${Math.cos(d*.5)*40}px,${Math.sin(d*.6)*34}px)`;};
window.capFade=(sel,t,a,b)=>{const e=$(sel);if(!e)return;const i=eOut(p(t,a,a+350));const o=eIn(p(t,b-350,b));
  e.style.opacity=clamp(i-o);e.style.transform=`translateY(${lerp(24,0,i)}px)`;};
window.BRAND_SVG=`<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="31" fill="#faf7f2"/>
  <path d="M18 20 L32 46 L46 20" stroke="#1d5c4d" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M40 15 C46 21 46 29 40 34" stroke="#7fb069" stroke-width="5" stroke-linecap="round" fill="none"/></svg>`;
