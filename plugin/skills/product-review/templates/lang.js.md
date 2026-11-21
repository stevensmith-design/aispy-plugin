# lang.js

The source of `templates/lang.js` (script commands in its comments point to `plugin-mode.md`). Write the fenced block's contents, unchanged, to `07-deliverables/src/lang.js`.

```js
/* Shared behaviour for every deliverable: language switch, embedded images, lightbox, marker
   toggle. Content lives in <template id="t-en"> (and <template id="t-ja"> when a second language
   is delivered); the chosen one is copied into #app. Title per language: data-title on the
   <template>. ?lang= and localStorage keep the choice across the package's documents.
   assemble.mjs inlines this file and sets window.__IMG (data-img="n" -> data URI). */
(function(){
  var KEY='review-lang';
  var langs=[].map.call(document.querySelectorAll('template[id^="t-"]'),function(t){return t.id.slice(2);});
  function pick(){
    try{var u=new URLSearchParams(location.search).get('lang');if(langs.indexOf(u)>=0)return u;}catch(e){}
    try{var s=localStorage.getItem(KEY);if(langs.indexOf(s)>=0)return s;}catch(e){}
    var nav=(navigator.language||'').toLowerCase().slice(0,2);
    return langs.indexOf(nav)>=0?nav:langs[0];
  }
  function imgs(root){
    if(!window.__IMG)return;
    root.querySelectorAll('[data-img]').forEach(function(i){var v=window.__IMG[i.getAttribute('data-img')];if(v)i.src=v;});
  }
  function render(l){
    var app=document.getElementById('app'),t=document.getElementById('t-'+l);if(!t)return;
    var y=window.scrollY;
    app.innerHTML=t.innerHTML; imgs(document);
    document.documentElement.lang=l;
    if(t.dataset.title)document.title=t.dataset.title;
    document.querySelectorAll('.lang-switch button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l?'true':'false');});
    try{localStorage.setItem(KEY,l);}catch(e){}
    try{var u=new URL(location.href);u.searchParams.set('lang',l);history.replaceState(null,'',u.toString());}catch(e){}
    try{if(typeof window.reviewInit==='function')window.reviewInit(app,l);}catch(e){console.error(e);}
    window.scrollTo(0,y);
  }
  var sw=document.querySelector('.lang-switch');
  if(sw&&langs.length<2)sw.hidden=true;
  document.addEventListener('click',function(e){
    var b=e.target.closest('.lang-switch button');
    if(b){render(b.dataset.l);return;}
    var tg=e.target.closest('[data-toggle-markers]');
    if(tg){var st=document.querySelector('.stage');if(st)st.classList.toggle('markers-off');return;}
    var im=e.target.closest('figure img');
    var lb=document.getElementById('lb');
    if(im&&lb){lb.querySelector('img').src=im.src;lb.style.display='flex';return;}
    if(lb&&e.target.closest('#lb')){lb.style.display='none';return;}
    var a=e.target.closest('a[href]');
    if(a&&langs.length>1){var h=a.getAttribute('href');
      if(/^[^:#?]+\.html(#.*)?$/.test(h)){e.preventDefault();var p=h.split('#');location.href=p[0]+'?lang='+document.documentElement.lang+(p[1]?'#'+p[1]:'');}}
  });
  document.addEventListener('keydown',function(e){var lb=document.getElementById('lb');if(e.key==='Escape'&&lb)lb.style.display='none';});
  render(pick());
  if(location.hash){var el=document.getElementById(location.hash.slice(1));if(el)el.scrollIntoView();}
})();
```
