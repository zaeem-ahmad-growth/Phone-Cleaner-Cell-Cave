# App Suspension: code and data

> **Generated file: do not edit by hand.** Produced by `node tools/export-docs.js` (GitHub runs it after every push).
> Everything behind the [App Suspension](../../tabs/01-app-suspension/index.html) tab in one place: how the page is put together, the full source of the code that draws it, and the full data it reads. **Load it when a question or change concerns how this tab works** (its calculations, data, filters or behaviour); wording-only edits do not need it. The visible text is in [docs/tabs/01-app-suspension.md](../tabs/01-app-suspension.md); where the data came from is in [research.md](research.md).

## How the page is put together

- Markup: [tabs/01-app-suspension/index.html](../../tabs/01-app-suspension/index.html) (851 lines), `<body data-page="suspension">`
- Self-contained: static HTML with its own styles and the inline script below; tab bar from [assets/nav.js](../../assets/nav.js)
- Sections and the functions that fill them: see the [code map](../code-map.md#01-app-suspension)

## Code

The page's content is static HTML in [index.html](../../tabs/01-app-suspension/index.html); its text is in [docs/tabs/01-app-suspension.md](../tabs/01-app-suspension.md). Its inline script, in full:

```js
(function(){
  var lb = document.getElementById('lb'), img = document.getElementById('lb-img'), cap = document.getElementById('lb-cap');
  function open(src, text){ img.src = src; img.alt = text || ''; cap.textContent = text || ''; lb.classList.add('on'); }
  function close(){ lb.classList.remove('on'); img.src = ''; }
  document.addEventListener('click', function(e){
    var b = e.target.closest('button.phone, button.asset');
    if (b) { open(b.getAttribute('data-full'), b.getAttribute('data-cap')); return; }
    if (e.target === lb || e.target.id === 'lb-x') close();
  });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
})();
```

### Styles

```css
:root{
  --ground:#F3F1F5; --surface:#FFFFFF; --sunk:#EAE6EE; --ink:#17131B; --ink-2:#463F4C; --muted:#71697A; --line:#DED8E3;
  --accent:#0D47A1; --accent-soft:#E3ECFB;
  --pass:#177A43; --pass-bg:#DFF2E7; --warn:#935E00; --warn-bg:#F9EDD2; --fail:#B8232F; --fail-bg:#FADFE2;
  --shadow:0 1px 2px rgba(23,19,27,.06),0 8px 24px rgba(23,19,27,.06);
  --display:"Anybody","Arial Narrow",system-ui,sans-serif;
  --body:"Albert Sans",system-ui,-apple-system,"Segoe UI",sans-serif;
  --mono:"JetBrains Mono",ui-monospace,"Cascadia Mono",Consolas,monospace;
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --ground:#0F0D12; --surface:#18151C; --sunk:#221E27; --ink:#F2EEF5; --ink-2:#D0C8D6; --muted:#9E95A5; --line:#2F2A36;
    --accent:#8DB3F7; --accent-soft:#0F1E3D;
    --pass:#58CF8E; --pass-bg:#15301F; --warn:#E6B04A; --warn-bg:#33270F; --fail:#FF7480; --fail-bg:#3A171B;
    --shadow:0 1px 2px rgba(0,0,0,.4),0 8px 28px rgba(0,0,0,.35);
  }
}
:root[data-theme="dark"]{
  --ground:#0F0D12; --surface:#18151C; --sunk:#221E27; --ink:#F2EEF5; --ink-2:#D0C8D6; --muted:#9E95A5; --line:#2F2A36;
  --accent:#8DB3F7; --accent-soft:#0F1E3D;
  --pass:#58CF8E; --pass-bg:#15301F; --warn:#E6B04A; --warn-bg:#33270F; --fail:#FF7480; --fail-bg:#3A171B;
  --shadow:0 1px 2px rgba(0,0,0,.4),0 8px 28px rgba(0,0,0,.35);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:110px}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
body{margin:0;background:var(--ground);color:var(--ink);font:400 16px/1.62 var(--body);padding-inline:20px;-webkit-font-smoothing:antialiased}
a{color:var(--accent);text-underline-offset:3px}
a:focus-visible,button:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px}
h1,h2,h3,h4{font-family:var(--display);text-wrap:balance;margin:0;line-height:1.1}
h1{font-size:clamp(32px,5vw,52px);font-weight:900;font-stretch:112%;letter-spacing:-.02em}
h2{font-size:clamp(25px,3.3vw,34px);font-weight:800;font-stretch:112%;letter-spacing:-.01em}
h3{font-size:19px;font-weight:700;font-stretch:110%}
h4{font-size:16px;font-weight:700;font-stretch:108%}
p{margin:0}
.mono{font-family:var(--mono);font-size:.86em;overflow-wrap:anywhere}
.tnum{font-variant-numeric:tabular-nums}
.label{font:600 11px/1.2 var(--body);letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}

.shell{max-width:1120px;margin:0 auto;padding-block:36px 96px;display:grid;gap:30px}
section{display:grid;gap:18px;scroll-margin-top:118px}
.sec-head{display:grid;gap:8px;border-top:3px solid var(--ink);padding-top:14px}
.panel{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:20px;box-shadow:var(--shadow);display:grid;gap:12px}
.panel.flat{box-shadow:none}
.grid-2{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:16px}
.grid-3{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:14px}
/* grid and flex children default to min-width:auto, so one long unbreakable
   token (a package name) makes the track wider than its panel and the text
   spills out of the card. */
.grid-2>*,.grid-3>*,.ev>*,.gfx>*,.verif>*{min-width:0}
.lede{font-size:18px;color:var(--ink-2)}
.muted{color:var(--muted)}
ul,ol{margin:0;padding-left:20px;display:grid;gap:7px}
li::marker{color:var(--muted)}

.pill{display:inline-flex;align-items:center;gap:6px;font:600 11px/1 var(--body);letter-spacing:.07em;text-transform:uppercase;padding:5px 9px;border-radius:999px;white-space:nowrap}
.pill.ok{background:var(--pass-bg);color:var(--pass)}
.pill.warn{background:var(--warn-bg);color:var(--warn)}
.pill.bad{background:var(--fail-bg);color:var(--fail)}
.pill.info{background:var(--accent-soft);color:var(--accent)}

.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(168px,1fr));gap:12px}
.kpi{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:14px;display:grid;gap:4px}
.kpi b{font-family:var(--display);font-size:27px;font-weight:800;font-stretch:110%;line-height:1}
.kpi span{font-size:13px;color:var(--muted)}

.callout{border-left:4px solid var(--accent);background:var(--accent-soft);padding:13px 15px;border-radius:0 10px 10px 0;display:grid;gap:6px}
.callout.bad{border-color:var(--fail);background:var(--fail-bg)}
.callout.warn{border-color:var(--warn);background:var(--warn-bg)}
.callout.ok{border-color:var(--pass);background:var(--pass-bg)}
.callout b{font-family:var(--display);font-stretch:108%}

blockquote{margin:0;padding:12px 15px;background:var(--sunk);border-radius:10px;font-size:15px;color:var(--ink-2);border-left:3px solid var(--line)}
blockquote cite{display:block;margin-top:7px;font-style:normal;font-size:12px;color:var(--muted)}

.table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:12px;background:var(--surface)}
table{border-collapse:collapse;width:100%;font-size:14.5px}
th,td{text-align:left;padding:10px 12px;border-bottom:1px solid var(--line);vertical-align:top}
th{font:600 11.5px/1.3 var(--body);letter-spacing:.07em;text-transform:uppercase;color:var(--muted);background:var(--sunk);position:sticky;top:0}
tbody tr:last-child td{border-bottom:0}
td code,th code{font-family:var(--mono);font-size:.88em;background:var(--sunk);padding:1px 5px;border-radius:5px}

.quote-field{background:var(--sunk);border:1px dashed var(--line);border-radius:10px;padding:12px 14px;font-family:var(--mono);font-size:13.5px;line-height:1.55;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--ink-2)}

.strip{display:grid;grid-auto-flow:column;grid-auto-columns:112px;gap:12px;overflow-x:auto;padding-bottom:8px;scroll-snap-type:x proximity}
.strip figure{margin:0;display:grid;gap:6px;scroll-snap-align:start;font-size:11.5px;line-height:1.35}
.phone{padding:0;border:1px solid var(--line);background:var(--sunk);border-radius:12px;overflow:hidden;cursor:zoom-in;display:block;aspect-ratio:9/16}
.phone img{display:block;width:100%;height:100%;object-fit:cover;object-position:top}
figcaption{font-size:12.2px;line-height:1.4;color:var(--muted)}
figcaption b{display:block;color:var(--ink);font-size:12.8px;font-weight:600}

/* Evidence row: three columns of comparable width — the claim and its proof in
   column 1, the screenshots side by side in columns 2 and 3, rendered large
   enough to read the figures on the device rather than as thumbnails. */
/* Evidence row: the claim and its bullets on the left, the screens that prove it
   on the right at half the old width, both vertically centred. */
.ev{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:26px;align-items:center;padding:18px 0;border-bottom:1px solid var(--line)}
.ev:last-child{border-bottom:0;padding-bottom:0}
.ev-body{grid-column:1;display:grid;gap:9px;align-content:center}
.ev-shots{grid-column:2;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:flex-start;max-width:486px}
.ev-shots.quad{max-width:312px}
.ev-shots figure{flex:0 0 150px;margin:0;display:grid;gap:6px}
.ev-shots.one figure,.ev-shots.mini figure{flex:0 0 150px}
.ev .phone{aspect-ratio:9/16}
.ev .phone img{object-fit:contain;object-position:top;background:var(--sunk)}
.ev figcaption{font-size:11.8px;line-height:1.35}
.ev figcaption b{font-size:12.4px}
.ev-claim{font-size:14.5px;color:var(--ink);background:var(--sunk);border-radius:9px;padding:8px 11px;border-left:3px solid var(--accent)}
.ev-head{display:flex;flex-wrap:wrap;gap:9px;align-items:center}
.ev-list{margin:0;padding-left:18px;display:grid;gap:5px;font-size:14.5px;color:var(--ink-2)}
.ev-list li::marker{color:var(--accent)}
.ev-list b{color:var(--ink)}
@media (max-width:820px){.ev{grid-template-columns:1fr}.ev-body,.ev-shots{grid-column:1}.ev-shots,.ev-shots.quad{max-width:none}}

.asset{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:var(--sunk);cursor:zoom-in;display:block;padding:0;width:100%}
.asset img{display:block;width:100%;height:auto}
.gfx{display:grid;grid-template-columns:200px minmax(0,1fr);gap:20px;align-items:start;padding:18px 0;border-bottom:1px solid var(--line)}
.gfx:last-child{border-bottom:0;padding-bottom:0}
.gfx.wide{grid-template-columns:300px minmax(0,1fr)}
.gfx-body{display:grid;gap:10px}
@media (max-width:760px){.gfx,.gfx.wide{grid-template-columns:1fr}}
.flag{display:grid;gap:4px;padding:10px 12px;border-radius:9px;background:var(--sunk);border-left:3px solid var(--muted)}
.flag.bad{background:var(--fail-bg);border-color:var(--fail)}
.flag.warn{background:var(--warn-bg);border-color:var(--warn)}
.flag.ok{background:var(--pass-bg);border-color:var(--pass)}
.vs{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.vs figure{margin:0;display:grid;gap:6px}
.vs .cap-top{font:600 10.5px/1.2 var(--body);letter-spacing:.1em;text-transform:uppercase}
.vs .store .cap-top{color:var(--fail)}
.vs .real .cap-top{color:var(--pass)}
.verif{display:grid;grid-template-columns:340px minmax(0,1fr);gap:20px;align-items:start;padding:18px 0;border-bottom:1px solid var(--line)}
.verif:last-child{border-bottom:0;padding-bottom:0}
@media (max-width:820px){.verif{grid-template-columns:1fr}}
.flag b{font-family:var(--display);font-stretch:108%;font-size:14.5px}
.flag span{font-size:14px;color:var(--ink-2)}
.lb{position:fixed;inset:0;background:rgba(10,8,12,.9);display:none;place-items:center;z-index:99;padding:22px}
.lb[open],.lb.on{display:grid}
.lb img{max-width:min(94vw,440px);max-height:86vh;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.5)}
.lb .cap{color:#fff;text-align:center;margin-top:10px;font-size:14px}
.lb button{position:absolute;top:16px;right:18px;background:rgba(255,255,255,.14);color:#fff;border:0;border-radius:999px;width:38px;height:38px;font-size:20px;cursor:pointer}

.foot{border-top:1px solid var(--line);padding-top:18px;color:var(--muted);font-size:13.5px;display:grid;gap:8px}

/* ── Appeal and notice, side by side ─────────────────────────────── */
.appeal-cols{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px;align-items:start}
.appeal-cols>*{min-width:0}
.appeal-col{display:grid;gap:16px;align-content:start}
@media (max-width:900px){.appeal-cols{grid-template-columns:1fr}}
.appeal-box{background:var(--surface);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow);overflow:hidden}
.appeal-box header{display:flex;flex-wrap:wrap;gap:9px;align-items:center;justify-content:space-between;padding:14px 18px;background:var(--sunk);border-bottom:1px solid var(--line)}
.appeal-text{margin:0;padding:18px;font-family:var(--mono);font-size:13.3px;line-height:1.62;color:var(--ink-2);white-space:pre-wrap;overflow-wrap:anywhere}
.appeal-text a{overflow-wrap:anywhere}
.thumb-link{display:flex;gap:14px;align-items:center;text-decoration:none;color:inherit;padding:12px;border:1px solid var(--line);border-radius:12px;background:var(--surface);box-shadow:var(--shadow)}
.thumb-link:hover{border-color:var(--accent)}
.thumb-link img{width:78px;height:92px;object-fit:cover;object-position:top;border:1px solid var(--line);border-radius:8px;background:var(--sunk);flex:none}
.thumb-link .t-txt{display:grid;gap:3px;min-width:0}
.thumb-link .t-txt b{font-family:var(--display);font-stretch:108%;font-size:15px}
.thumb-link .t-txt span{font-size:13.2px;color:var(--muted)}
.metafield{display:grid;gap:8px}
/* ── Three-way store / app / updated comparison ─────────────────── */
.three-up{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;align-items:start}
.three-up>*{min-width:0}
.three-up figure{margin:0;display:grid;gap:7px;align-content:start}
.three-up .cap-top{font:600 10.5px/1.2 var(--body);letter-spacing:.1em;text-transform:uppercase}
.three-up .store .cap-top{color:var(--fail)}
.three-up .real .cap-top{color:var(--pass)}
.three-up .fixed .cap-top{color:var(--accent)}
.three-up .asset,.three-up .phone{width:60%}
.three-up .phone{aspect-ratio:9/16;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--sunk)}
.three-up .phone img{width:100%;height:100%;object-fit:contain;object-position:top}
.three-up figcaption{font-size:12.5px;line-height:1.45;color:var(--muted)}
.three-up figcaption b{display:block;color:var(--ink);font-size:13.2px;font-weight:600}
.three-up.two{grid-template-columns:repeat(2,minmax(0,1fr))}
.row-head{display:flex;flex-wrap:wrap;gap:10px;align-items:baseline;margin-top:16px;padding-top:12px;border-top:1px solid var(--line)}
.row-head>span:last-child{font-size:13.5px;color:var(--muted)}
@media (max-width:700px){.three-up,.three-up.two{grid-template-columns:1fr}}
```

## Data this tab reads

None from `assets/data.js`: every number is in the page itself.
