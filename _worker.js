const ADMIN_HTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="dark light">
<title>Octopus Relay</title>
<style>
:root{--bg:#101214;--page-bg:linear-gradient(145deg,#111316 0%,#17191b 48%,#101718 100%);--grid-bg:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px);--panel:rgba(255,255,255,.08);--panel-strong:rgba(255,255,255,.13);--line:rgba(255,255,255,.16);--line-strong:rgba(255,255,255,.28);--text:#f5f2ec;--muted:#b9b4ac;--soft:#85817b;--cyan:#6ed8d1;--green:#20c986;--amber:#f1c46a;--red:#ff746d;--ink:#17191b;--control-bg:rgba(12,14,16,.52);--control-border:rgba(255,255,255,.18);--control-placeholder:#7f7a72;--card-bg:rgba(255,255,255,.055);--success-bg:#1f9e68;--success-text:#ffffff;--success-border:#2fc883;--secondary-bg:rgba(255,255,255,.08);--secondary-text:#f5f2ec;--danger-bg:#c84b45;--danger-text:#ffffff;--toast-bg:rgba(24,26,28,.86);--toast-text:#f6f4ef;--toast-border:rgba(255,255,255,.18);--shadow:0 22px 70px rgba(0,0,0,.28)}
body[data-theme="light"]{--bg:#f6f4ef;--page-bg:linear-gradient(145deg,#fbfaf7 0%,#eef5f3 58%,#f8f6f1 100%);--grid-bg:linear-gradient(rgba(30,34,36,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(30,34,36,.035) 1px,transparent 1px);--panel:rgba(255,255,255,.56);--panel-strong:rgba(255,255,255,.82);--line:rgba(38,43,45,.14);--line-strong:rgba(38,43,45,.25);--text:#242424;--muted:#66625c;--soft:#8b8780;--cyan:#087e78;--green:#10a46b;--amber:#9a680d;--red:#bd3b34;--ink:#ffffff;--control-bg:rgba(255,255,255,.68);--control-border:rgba(45,54,56,.18);--control-placeholder:#8a8985;--card-bg:rgba(255,255,255,.42);--success-bg:#15774d;--success-text:#ffffff;--success-border:#10643f;--secondary-bg:rgba(255,255,255,.58);--secondary-text:#273034;--danger-bg:#c94339;--danger-text:#ffffff;--toast-bg:rgba(255,255,255,.88);--toast-text:#202225;--toast-border:rgba(43,48,50,.16);--shadow:0 20px 55px rgba(54,48,40,.12)}
*{box-sizing:border-box;margin:0;padding:0}
html{min-height:100%;background:#111316}
body{min-height:100vh;font-family:Inter,'SF Pro Display',-apple-system,'Segoe UI',Roboto,Arial,sans-serif;color:var(--text);background:var(--page-bg);-webkit-tap-highlight-color:transparent}
body::before{content:'';position:fixed;inset:0;pointer-events:none;background:var(--grid-bg);background-size:44px 44px;mask-image:linear-gradient(to bottom,rgba(0,0,0,.85),rgba(0,0,0,.18));}
button,input,textarea{font:inherit}
button{touch-action:manipulation}
.app{width:min(1200px,100%);margin:0 auto;padding:26px;padding-left:max(26px,env(safe-area-inset-left));padding-right:max(26px,env(safe-area-inset-right));padding-top:max(26px,env(safe-area-inset-top));padding-bottom:max(26px,env(safe-area-inset-bottom))}
.hero{position:relative;display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:22px;align-items:center;min-height:230px;margin-bottom:18px;padding:34px 36px;overflow:hidden;border:1px solid var(--line);border-radius:22px;background:linear-gradient(180deg,var(--panel-strong),var(--panel));box-shadow:var(--shadow);backdrop-filter:blur(22px)}
.brand{position:relative;min-width:0;z-index:1}
.hero-word{position:absolute;z-index:0;left:170px;top:18px;font-size:118px;line-height:.8;font-weight:900;color:var(--text);opacity:.045;letter-spacing:0;pointer-events:none;white-space:nowrap}
.kicker{display:inline-flex;align-items:center;gap:8px;margin-bottom:10px;color:var(--muted);font-size:17px;font-weight:760;letter-spacing:0}
.dot{width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 0 4px rgba(121,214,138,.12)}
h1{position:relative;z-index:1;font-size:56px;line-height:.98;font-weight:860;letter-spacing:0;margin-bottom:14px}
.sub{position:relative;z-index:1;max-width:650px;color:var(--muted);font-size:17px;line-height:1.7;font-weight:650}
.status-panel{position:relative;z-index:1;display:flex;flex-direction:column;align-items:flex-end;gap:12px}
.clock-time{font-size:44px;line-height:1;font-weight:820;color:var(--text);font-variant-numeric:tabular-nums}
.clock-date{color:var(--muted);font-size:15px;font-weight:640}
.top-actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:flex-end}
.endpoint{width:100%;min-width:0;padding:12px 14px;border:1px solid var(--line);border-radius:15px;background:color-mix(in srgb,var(--card-bg) 78%,transparent);backdrop-filter:blur(18px);cursor:pointer;transition:border-color .15s,background .15s,transform .15s}
.endpoint:hover{border-color:color-mix(in srgb,var(--cyan) 42%,var(--line));background:color-mix(in srgb,var(--cyan) 8%,var(--card-bg));transform:translateY(-1px)}
.endpoint span{display:block;color:var(--soft);font-size:11px;margin-bottom:6px}
.endpoint code{display:block;color:var(--cyan);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.endpoint-head{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:0}
.endpoint-head span{margin:0}
.endpoint-copy{width:100%;border:0;background:transparent;padding:0;text-align:left;cursor:pointer}
.theme-toggle{border:1px solid var(--line);border-radius:999px;background:var(--secondary-bg);color:var(--secondary-text);padding:9px 13px;cursor:pointer;font-size:13px;font-weight:760}
.tabs{display:flex;gap:8px;margin:18px 0;overflow-x:auto;padding:5px;border:1px solid var(--line);border-radius:18px;background:var(--panel);backdrop-filter:blur(18px);width:max-content;max-width:100%}
.tab{border:0;border-radius:13px;background:transparent;color:var(--muted);padding:11px 18px;cursor:pointer;font-size:13px;font-weight:720;white-space:nowrap}
.tab:hover{color:var(--text);background:rgba(255,255,255,.08)}
.tab:focus-visible,.btn:focus-visible,input:focus-visible,textarea:focus-visible,.model-row:focus-visible,.picker-btn:focus-visible,.picker-option:focus-visible,.endpoint:focus-visible{outline:2px solid var(--cyan);outline-offset:2px}
.tab.on{background:rgba(255,255,255,.16);color:var(--text);box-shadow:inset 0 0 0 1px rgba(255,255,255,.1)}
.panel{display:none}
.panel.on{display:block}
.grid{display:grid;grid-template-columns:380px minmax(0,1fr);gap:18px;align-items:start}
.glass{border:1px solid var(--line);border-radius:18px;background:linear-gradient(180deg,var(--panel-strong),var(--panel));box-shadow:0 16px 46px rgba(0,0,0,.16);backdrop-filter:blur(22px)}
.card{padding:18px}
.card + .card{margin-top:14px}
.card h2,.card h3{font-size:16px;line-height:1.25;font-weight:780;letter-spacing:0;margin-bottom:14px}
.hint{color:var(--soft);font-size:12px;line-height:1.6;margin-top:-6px;margin-bottom:14px}
.field{margin-bottom:13px}
.field label{display:block;color:var(--muted);font-size:12px;margin-bottom:7px}
.field input,.field textarea{width:100%;border:1px solid var(--control-border);border-radius:12px;background:var(--control-bg);color:var(--text);padding:11px 12px;font-size:13px;transition:border-color .15s,background .15s,box-shadow .15s}
.field textarea{min-height:110px;resize:vertical;line-height:1.6}
.field input::placeholder,.field textarea::placeholder{color:var(--control-placeholder)}
.field input:focus,.field textarea:focus{border-color:var(--cyan);background:var(--control-bg);box-shadow:0 0 0 4px color-mix(in srgb,var(--cyan) 16%,transparent)}
.picker{position:relative}
.picker-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px;border:1px solid var(--control-border);border-radius:12px;background:var(--control-bg);color:var(--text);padding:11px 12px;cursor:pointer;font-size:13px;text-align:left;transition:border-color .15s,box-shadow .15s}
.picker-btn.open{border-color:var(--cyan);box-shadow:0 0 0 4px color-mix(in srgb,var(--cyan) 16%,transparent)}
.picker-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.chev{color:var(--soft);font-size:12px;transition:transform .16s}
.picker-btn.open .chev{transform:rotate(180deg)}
.picker-menu{display:none;position:absolute;z-index:12;left:0;right:0;top:calc(100% + 8px);max-height:260px;overflow:auto;border:1px solid var(--line);border-radius:14px;background:linear-gradient(180deg,var(--panel-strong),var(--panel));box-shadow:var(--shadow);backdrop-filter:blur(22px);padding:6px}
.picker-menu.open{display:block}
.picker-option{width:100%;border:0;border-radius:10px;background:transparent;color:var(--text);padding:10px 11px;text-align:left;cursor:pointer;font-size:13px}
.picker-option:hover{background:color-mix(in srgb,var(--cyan) 12%,transparent)}
.picker-option.selected{background:color-mix(in srgb,var(--cyan) 18%,transparent);color:var(--cyan);font-weight:750}
.picker-empty{padding:12px;color:var(--soft);font-size:13px}
.row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.btn{border:1px solid transparent;border-radius:12px;padding:10px 14px;cursor:pointer;font-size:13px;font-weight:700;transition:transform .15s,background .15s,border-color .15s,color .15s}
.btn:hover{transform:translateY(-1px)}
.primary{background:var(--text);color:var(--ink)}
.secondary{background:var(--secondary-bg);border-color:var(--line);color:var(--secondary-text)}
.success{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text);box-shadow:0 8px 20px color-mix(in srgb,var(--success-bg) 22%,transparent)}
.danger{background:var(--danger-bg);border-color:var(--danger-bg);color:var(--danger-text)}
.small{padding:7px 10px;border-radius:10px;font-size:12px}
.icon-btn{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;padding:0;border-radius:10px}
.icon-btn svg{width:15px;height:15px;stroke:currentColor;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round}
.list{display:grid;gap:10px}
.item{display:flex;justify-content:space-between;gap:14px;align-items:flex-start;border:1px solid var(--line);border-radius:16px;background:color-mix(in srgb,var(--card-bg) 84%,transparent);backdrop-filter:blur(16px);padding:14px}
.item-main{min-width:0}
.item h4{font-size:14px;margin-bottom:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.item p{color:var(--soft);font-size:12px;line-height:1.55;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:520px}
.actions{display:flex;gap:7px;flex-shrink:0}
.stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-bottom:14px}
.stat{border:1px solid var(--line);border-radius:16px;background:color-mix(in srgb,var(--card-bg) 82%,transparent);backdrop-filter:blur(14px);padding:14px}
.stat strong{display:block;font-size:24px;color:var(--cyan);font-variant-numeric:tabular-nums}
.stat span{display:block;color:var(--soft);font-size:12px;margin-top:4px}
.toolbar{display:flex;gap:10px;align-items:flex-end;flex-wrap:wrap}
.toolbar .field{flex:1;min-width:220px;margin-bottom:0}
.search{margin:14px 0}
.model-box{max-height:380px;overflow:auto;padding-right:4px}
.model-row{display:block;width:100%;text-align:left;border:1px solid var(--line);border-radius:14px;background:color-mix(in srgb,var(--card-bg) 82%,transparent);backdrop-filter:blur(16px);color:var(--text);padding:12px;margin-bottom:8px;cursor:pointer}
.model-row:hover,.model-row.sel{border-color:rgba(114,215,210,.6);background:color-mix(in srgb,var(--cyan) 10%,var(--card-bg))}
.model-row strong{display:block;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.model-row span{display:block;margin-top:4px;color:var(--soft);font-size:11px}
.badge{display:inline-flex;align-items:center;border:1px solid rgba(244,199,107,.38);background:rgba(244,199,107,.12);color:#ffe1a0;border-radius:999px;padding:2px 8px;font-size:11px;margin-left:6px}
.empty{border:1px dashed var(--line-strong);border-radius:16px;color:var(--soft);padding:28px;text-align:center;font-size:13px;background:var(--card-bg)}
.workbench{display:block}
.test-toolbar{display:grid;grid-template-columns:minmax(0,1fr) auto auto;gap:10px;align-items:center;margin-bottom:14px}
.test-toolbar .field{margin:0}
.test-toolbar .btn{height:42px;align-self:end;display:inline-flex;align-items:center;justify-content:center}
.category{border:1px solid var(--line);border-radius:16px;background:color-mix(in srgb,var(--card-bg) 72%,transparent);backdrop-filter:blur(18px);padding:14px}
.category + .category{margin-top:12px}
.category-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px;color:var(--muted);font-size:12px;font-weight:750}
.test-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(245px,1fr));gap:10px}
.model-card{position:relative;min-height:168px;display:flex;flex-direction:column;justify-content:space-between;border:1px solid var(--line);border-radius:16px;background:color-mix(in srgb,var(--card-bg) 82%,transparent);backdrop-filter:blur(18px);padding:14px}
.model-card:hover{border-color:color-mix(in srgb,var(--cyan) 42%,var(--line));background:color-mix(in srgb,var(--cyan) 9%,var(--card-bg))}
.model-card-main{min-width:0;padding-right:34px}
.model-card h4{font-size:14px;line-height:1.35;margin:0 0 8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.model-card p{color:var(--soft);font-size:12px;line-height:1.55;margin:0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.model-card-actions{display:flex;gap:8px;align-items:center;margin-top:18px;padding-top:2px}
.check-btn{width:24px;height:24px;border:1px solid var(--control-border);border-radius:8px;background:var(--control-bg);color:var(--success-text);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex:0 0 auto}
.model-card .check-btn{position:absolute;right:12px;top:12px}
.check-btn svg{width:14px;height:14px;stroke:currentColor;stroke-width:3;fill:none;stroke-linecap:round;stroke-linejoin:round;opacity:0}
.check-btn.on{background:var(--success-bg);border-color:var(--success-border)}
.check-btn.on svg{opacity:1}
.model-meta{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
.pill{display:inline-flex;align-items:center;border:1px solid var(--line);border-radius:999px;background:var(--secondary-bg);color:var(--muted);font-size:11px;padding:3px 8px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.test-result{margin-top:14px;border:1px solid var(--line);border-radius:14px;background:var(--card-bg);padding:12px;color:var(--muted);font-size:13px;line-height:1.65;white-space:pre-wrap}
.test-result.ok{color:var(--text);border-color:rgba(121,214,138,.36);background:rgba(121,214,138,.08)}
.test-result.bad{color:#ffd0cb;border-color:rgba(255,129,119,.36);background:rgba(255,129,119,.08)}
.note{padding:16px}
.note h3{margin-bottom:8px;color:var(--text)}
.note p{color:var(--muted);font-size:13px;line-height:1.7}
.note code{display:inline-block;max-width:100%;vertical-align:bottom;overflow:hidden;text-overflow:ellipsis;background:rgba(255,255,255,.1);border:1px solid var(--line);border-radius:8px;padding:2px 7px;color:var(--cyan)}
.modal{display:none;position:fixed;inset:0;z-index:20;align-items:center;justify-content:center;padding:20px;background:rgba(0,0,0,.55)}
.modal.show{display:flex}
.dialog{width:min(520px,100%);max-height:86vh;overflow:auto;padding:20px}
.dialog h3{font-size:17px;margin-bottom:14px}
.toast{position:fixed;right:22px;bottom:22px;z-index:30;max-width:min(420px,calc(100vw - 44px));border:1px solid var(--toast-border);border-radius:14px;background:var(--toast-bg);box-shadow:var(--shadow);backdrop-filter:blur(22px);padding:12px 14px;color:var(--toast-text);font-size:13px}
.login{position:fixed;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(0,0,0,.34);backdrop-filter:blur(18px)}
.login.hidden{display:none}
.login-card{width:min(430px,100%);padding:24px}
.login-card h2{font-size:24px;margin-bottom:8px}
.login-card p{color:var(--muted);font-size:13px;line-height:1.7;margin-bottom:18px}
.login-error{min-height:20px;color:var(--red);font-size:12px;margin-top:10px}
.loading{display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.25);border-top-color:var(--cyan);border-radius:50%;animation:spin 1s linear infinite;vertical-align:-2px}
@keyframes spin{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}
@media(max-width:860px){.hero{grid-template-columns:1fr;padding:26px;min-height:0}.hero-word{left:80px;top:20px;font-size:82px}.status-panel{align-items:flex-start}.endpoint{min-width:0}.grid,.workbench{grid-template-columns:1fr}.stats{grid-template-columns:1fr 1fr}.app{padding:16px}h1{font-size:42px}.clock-time{font-size:36px}}
@media(max-width:520px){.item{display:block}.actions{margin-top:12px}.tabs{width:100%}.tab{flex:1;padding:10px 9px}.stats{grid-template-columns:1fr}.test-toolbar{grid-template-columns:1fr}.icon-btn{width:36px;height:36px}.hero{padding:22px}.hero-word{font-size:60px;left:34px;top:24px}h1{font-size:36px}.sub{font-size:14px}.top-actions{justify-content:flex-start}}
</style>
</head>
<body>
<main class="app">
  <section class="hero">
    <div class="brand">
      <div class="hero-word">OCTOPUS</div>
      <div class="kicker" id="greeting">欢迎</div>
      <h1>欢迎回来</h1>
      <p class="sub">把多条上游触手收进一个入口。渠道、映射、测试，都放在这块私人控制台里。</p>
    </div>
    <div class="status-panel">
      <div class="clock-time" id="clock-time">--:--</div>
      <div class="clock-date" id="clock-date">北京时间</div>
      <div class="top-actions">
        <button class="theme-toggle" id="theme-toggle" type="button">浅色</button>
      </div>
      <div class="endpoint" id="endpoint-copy" title="点击复制 API 端点" role="button" tabindex="0">
        <div class="endpoint-head"><span>API 端点</span></div>
        <div class="endpoint-copy"><code id="endpoint-url"></code></div>
      </div>
    </div>
  </section>

  <nav class="tabs" role="tablist" aria-label="管理面板导航">
    <button class="tab on" data-tab="platforms" role="tab" aria-selected="true">上游渠道</button>
    <button class="tab" data-tab="models" role="tab" aria-selected="false">模型映射</button>
    <button class="tab" data-tab="test" role="tab" aria-selected="false">连通测试</button>
  </nav>

  <section class="panel on" id="platforms-panel" role="tabpanel">
    <div class="grid">
      <div class="glass card">
        <h2>接入渠道</h2>
        <p class="hint">填入上游 OpenAI 兼容地址和真实密钥，保存后即可参与路由。</p>
        <div class="field"><label for="p-name">渠道名称</label><input id="p-name" type="text" placeholder="CPA"></div>
        <div class="field"><label for="p-url">上游地址</label><input id="p-url" type="url" placeholder="https://api.example.com" autocomplete="url"></div>
        <div class="field"><label for="p-key">上游 API 密钥</label><input id="p-key" type="password" placeholder="sk-..." autocomplete="off" spellcheck="false"></div>
        <button class="btn primary" id="add-platform">保存渠道</button>
      </div>
      <div>
        <div class="stats" id="stats"></div>
        <div class="list" id="platform-list"></div>
      </div>
    </div>
  </section>

  <section class="panel" id="models-panel" role="tabpanel">
    <div class="grid">
      <div>
        <div class="glass card">
          <h2>新建映射</h2>
          <p class="hint">对外暴露自定义模型名，内部路由到真实上游模型。</p>
          <div class="field"><label id="m-platform-title">渠道</label><div class="picker" id="platform-picker"><button class="picker-btn" id="m-platform-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="m-platform-title m-platform-label"><span class="picker-label" id="m-platform-label">选择渠道</span><span class="chev">▼</span></button><div class="picker-menu" id="m-platform-menu" role="listbox" aria-labelledby="m-platform-title"></div></div></div>
          <div class="field"><label for="m-original">原始模型名</label><input id="m-original" type="text" placeholder="从右侧选择，或手动输入"></div>
          <div class="field"><label for="m-custom">自定义模型名</label><input id="m-custom" type="text" placeholder="例如：fast-gpt-4o"></div>
          <div class="row">
            <button class="btn success" id="add-mapping">保存映射</button>
            <button class="btn secondary" id="refresh-models" type="button">刷新模型</button>
          </div>
        </div>
      </div>
      <div class="glass card">
        <h2>上游模型</h2>
        <div class="field search"><label for="model-search">搜索</label><input id="model-search" type="search" placeholder="输入关键词过滤模型"></div>
        <div class="model-box" id="available-models"></div>
      </div>
    </div>
  </section>

  <section class="panel" id="test-panel" role="tabpanel">
    <div class="workbench">
      <div class="glass card">
        <h2>现有模型</h2>
        <div class="test-toolbar">
          <div class="field"><label for="test-search">搜索模型</label><input id="test-search" type="search" placeholder="搜索自定义名、原始名或平台"></div>
          <button class="btn secondary" id="select-all-models" type="button">全选</button>
          <button class="btn danger" id="bulk-delete-models" type="button">批量删除</button>
        </div>
        <div class="list" id="test-list"></div>
      </div>
    </div>
  </section>
</main>

<div class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="dialog glass">
    <h3 id="modal-title"></h3>
    <div id="modal-body"></div>
    <div class="row" style="justify-content:flex-end;margin-top:18px" id="modal-actions"></div>
  </div>
</div>

<section class="login" id="login-panel" aria-labelledby="login-title">
  <div class="login-card glass">
    <div class="kicker"><span class="dot"></span>Admin access</div>
    <h2 id="login-title">进入控制台</h2>
    <p>请输入 Worker 环境变量里的 ADMIN_KEY。密钥只保存在你的浏览器本地，用于管理渠道和模型映射。</p>
    <div class="field"><label for="login-key">管理密钥</label><input id="login-key" type="password" autocomplete="current-password" placeholder="ADMIN_KEY"></div>
    <div class="row">
      <button class="btn primary" id="login-submit" type="button">进入</button>
      <button class="btn secondary" id="login-clear" type="button">清除本机密钥</button>
    </div>
    <div class="login-error" id="login-error"></div>
  </div>
</section>

<script>
(function(){
var base=window.location.origin;
var adminKey=localStorage.getItem('ai_proxy_admin_key')||'';
var platforms=[],mappings=[],availableModels=[],availablePlatform='',selectedPlatformId='';
var selectedMappingIds={};

function $(id){return document.getElementById(id)}
function esc(v){var d=document.createElement('div');d.textContent=v==null?'':String(v);return d.innerHTML}
function mask(v){v=String(v||'');return v.length<=10?'••••••':v.slice(0,5)+'••••'+v.slice(-4)}
function icon(name){var icons={play:'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',edit:'<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',trash:'<svg viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5"/><path d="M14 11v5"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg>'};return icons[name]||''}
function headers(extra){var h={'Content-Type':'application/json'};if(adminKey)h['X-Admin-Key']=adminKey;if(extra)Object.keys(extra).forEach(function(k){h[k]=extra[k]});return h}
async function api(path,opts){var r=await fetch(base+path,Object.assign({},opts||{},{headers:headers(opts&&opts.headers)}));var text=await r.text();var data=null;try{data=text?JSON.parse(text):null}catch(e){data={error:text||r.statusText}}if(r.status===401){localStorage.removeItem('ai_proxy_admin_key');adminKey='';showLogin('管理密钥不正确，请重新输入。');throw new Error('Unauthorized')}if(!r.ok){throw new Error((data&&(data.message||data.error&&data.error.message||data.error))||('HTTP '+r.status))}return data}
function toast(msg){var t=document.createElement('div');t.className='toast';t.setAttribute('role','status');t.setAttribute('aria-live','polite');t.textContent=msg;document.body.appendChild(t);setTimeout(function(){t.remove()},3300)}
function copyText(text){if(navigator.clipboard&&navigator.clipboard.writeText){return navigator.clipboard.writeText(text)}var ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.left='-9999px';document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();return Promise.resolve()}
async function copyEndpoint(){try{await copyText(base);toast('API 端点已复制')}catch(e){toast('复制失败：'+e.message)}}
function updateClock(){
  var now=new Date();
  var time=new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',hour:'2-digit',minute:'2-digit',hour12:false}).format(now);
  var date=new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',year:'numeric',month:'long',day:'numeric',weekday:'long'}).format(now);
  var hour=Number(new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Shanghai',hour:'2-digit',hour12:false}).format(now));
  var greet=hour<6?'夜深了':hour<12?'上午好':hour<14?'中午好':hour<18?'下午好':'晚上好';
  $('clock-time').textContent=time;
  $('clock-date').textContent=date;
  $('greeting').textContent=greet;
}
function showLogin(msg){$('login-panel').classList.remove('hidden');$('login-error').textContent=msg||'';setTimeout(function(){$('login-key').focus()},0)}
function hideLogin(){$('login-panel').classList.add('hidden');$('login-error').textContent=''}
async function verifyAdminKey(){await api('/api/platforms')}
async function submitLogin(){var key=$('login-key').value.trim();if(!key){$('login-error').textContent='请输入 ADMIN_KEY';return}adminKey=key;$('login-error').textContent='正在验证...';try{await verifyAdminKey();localStorage.setItem('ai_proxy_admin_key',adminKey);await loadAll();hideLogin();toast('已进入管理面板')}catch(e){localStorage.removeItem('ai_proxy_admin_key');adminKey='';$('login-error').textContent='管理密钥不正确'}}
function clearLogin(){localStorage.removeItem('ai_proxy_admin_key');adminKey='';$('login-key').value='';showLogin('已清除本机保存的管理密钥。')}
function applyTheme(theme){document.body.setAttribute('data-theme',theme);$('theme-toggle').textContent=theme==='light'?'深色':'浅色';localStorage.setItem('ai_proxy_theme',theme)}
function initTheme(){var saved=localStorage.getItem('ai_proxy_theme');var theme=saved||((window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark');applyTheme(theme)}
function toggleTheme(){applyTheme(document.body.getAttribute('data-theme')==='light'?'dark':'light')}
function setLoading(el,msg){el.innerHTML='<div class="empty"><span class="loading"></span> '+esc(msg||'加载中')+'</div>'}
function empty(msg){return '<div class="empty">'+esc(msg)+'</div>'}
function closeModal(){$('modal').classList.remove('show')}
function openModal(title,body,onOk,okText){$('modal-title').textContent=title;$('modal-body').innerHTML=body;var a=$('modal-actions');a.innerHTML='';var cancel=document.createElement('button');cancel.className='btn secondary';cancel.textContent='取消';cancel.onclick=closeModal;var ok=document.createElement('button');ok.className='btn primary';ok.textContent=okText||'保存';ok.onclick=onOk;a.appendChild(cancel);a.appendChild(ok);$('modal').classList.add('show')}
function confirmModal(title,message,onOk){$('modal-title').textContent=title;$('modal-body').innerHTML='<p style="color:var(--muted);font-size:13px;line-height:1.7">'+esc(message)+'</p>';var a=$('modal-actions');a.innerHTML='';var cancel=document.createElement('button');cancel.className='btn secondary';cancel.textContent='取消';cancel.onclick=closeModal;var ok=document.createElement('button');ok.className='btn danger';ok.textContent='删除';ok.onclick=onOk;a.appendChild(cancel);a.appendChild(ok);$('modal').classList.add('show')}

async function loadAll(){
  setLoading($('platform-list'),'读取平台');
  setLoading($('test-list'),'读取模型');
  try{
    platforms=await api('/api/platforms');
    mappings=await api('/api/mappings');
    Object.keys(selectedMappingIds).forEach(function(id){if(!mappings.some(function(m){return m.id===id}))delete selectedMappingIds[id]});
    renderStats();renderPlatforms();renderPlatformSelect();renderTestModels();renderAvailable();
  }catch(e){$('platform-list').innerHTML=empty(e.message);$('test-list').innerHTML=empty(e.message)}
}
function renderStats(){
  var used={};mappings.forEach(function(m){used[m.platformId]=true});
  $('stats').innerHTML='<div class="stat"><strong>'+platforms.length+'</strong><span>渠道</span></div><div class="stat"><strong>'+mappings.length+'</strong><span>模型映射</span></div><div class="stat"><strong>'+Object.keys(used).length+'</strong><span>已路由渠道</span></div>';
}
function renderPlatforms(){
  var list=$('platform-list');list.innerHTML='';
  if(!platforms.length){list.innerHTML=empty('还没有渠道，先接入一个上游中转站。');return}
  platforms.forEach(function(p,idx){
    var count=mappings.filter(function(m){return m.platformId===p.id}).length;
    var item=document.createElement('div');item.className='item glass';
    item.innerHTML='<div class="item-main"><h4>'+esc(p.name)+'</h4><p>'+esc(p.baseUrl)+'</p><p>密钥 '+esc(mask(p.apiKey))+' · '+count+' 个模型</p></div>';
    var actions=document.createElement('div');actions.className='actions';
    var edit=document.createElement('button');edit.className='btn secondary small';edit.textContent='编辑';edit.onclick=function(){editPlatform(idx)};
    var del=document.createElement('button');del.className='btn danger small';del.textContent='删除';del.onclick=function(){deletePlatform(p.id)};
    actions.appendChild(edit);actions.appendChild(del);item.appendChild(actions);list.appendChild(item);
  });
}
function renderPlatformSelect(){
  var menu=$('m-platform-menu');
  var current=selectedPlatformId;
  if(current&&!platforms.some(function(p){return p.id===current})){selectedPlatformId='';current=''}
  menu.innerHTML='';
  if(!platforms.length){
    $('m-platform-label').textContent='还没有渠道';
    menu.innerHTML='<div class="picker-empty">先在“上游渠道”里添加中转站。</div>';
    return;
  }
  $('m-platform-label').textContent=current?(platforms.find(function(p){return p.id===current}).name):'选择渠道';
  platforms.forEach(function(p){
    var b=document.createElement('button');
    b.className='picker-option'+(p.id===current?' selected':'');
    b.type='button';
    b.setAttribute('role','option');
    b.setAttribute('aria-selected',p.id===current?'true':'false');
    b.textContent=p.name;
    b.onclick=function(){selectPlatform(p.id)};
    menu.appendChild(b);
  });
}
function setPickerOpen(open){
  $('m-platform-menu').classList.toggle('open',open);
  $('m-platform-btn').classList.toggle('open',open);
  $('m-platform-btn').setAttribute('aria-expanded',open?'true':'false');
}
function selectPlatform(id){
  selectedPlatformId=id;
  availableModels=[];
  availablePlatform='';
  setPickerOpen(false);
  renderPlatformSelect();
  renderAvailable();
}
function renderTestModels(){
  var list=$('test-list');list.innerHTML='';
  if(!mappings.length){list.innerHTML=empty('还没有可测试的模型。先添加模型映射。');updateSelectionControls();return}
  var names={};platforms.forEach(function(p){names[p.id]=p.name});
  var q=$('test-search').value.trim().toLowerCase();
  var filtered=mappings.filter(function(m){var pn=names[m.platformId]||'未知平台';return !q||m.customName.toLowerCase().indexOf(q)!==-1||m.originalName.toLowerCase().indexOf(q)!==-1||pn.toLowerCase().indexOf(q)!==-1});
  if(!filtered.length){list.innerHTML=empty('没有匹配的模型。');updateSelectionControls();return}
  var groups={};
  filtered.forEach(function(m){var key=m.platformId||'unknown';if(!groups[key])groups[key]=[];groups[key].push(m)});
  Object.keys(groups).forEach(function(platformId){
    var group=document.createElement('div');group.className='category';
    var title=document.createElement('div');title.className='category-head';
    title.innerHTML='<span>'+esc(names[platformId]||'未知平台')+'</span><span>'+groups[platformId].length+' 个模型</span>';
    group.appendChild(title);
    var grid=document.createElement('div');grid.className='test-grid';
    groups[platformId].forEach(function(m){
      var idx=mappings.findIndex(function(x){return x.id===m.id});
      var item=document.createElement('div');item.className='model-card';
      var check=document.createElement('button');check.className='check-btn'+(selectedMappingIds[m.id]?' on':'');check.type='button';check.title='选择';check.setAttribute('aria-pressed',selectedMappingIds[m.id]?'true':'false');check.innerHTML=icon('check');check.onclick=function(){selectedMappingIds[m.id]=!selectedMappingIds[m.id];if(!selectedMappingIds[m.id])delete selectedMappingIds[m.id];renderTestModels()};
      var main=document.createElement('div');main.className='model-card-main';
      main.innerHTML='<h4>'+esc(m.customName)+'</h4><p>原始模型：'+esc(m.originalName)+'</p><div class="model-meta"><span class="pill">'+esc(names[m.platformId]||'未知平台')+'</span><span class="pill">/v1/chat/completions</span></div>';
      var actions=document.createElement('div');actions.className='model-card-actions';
      var test=document.createElement('button');test.className='btn success small';test.title='测试';test.setAttribute('aria-label','测试 '+m.customName);test.textContent='测试';test.onclick=function(){testMapping(m.id)};
      var edit=document.createElement('button');edit.className='btn secondary small';edit.title='编辑';edit.setAttribute('aria-label','编辑 '+m.customName);edit.textContent='编辑';edit.onclick=function(){editMapping(idx)};
      var del=document.createElement('button');del.className='btn danger small';del.title='删除';del.setAttribute('aria-label','删除 '+m.customName);del.textContent='删除';del.onclick=function(){deleteMapping(m.id)};
      actions.appendChild(test);actions.appendChild(edit);actions.appendChild(del);item.appendChild(check);item.appendChild(main);item.appendChild(actions);grid.appendChild(item);
    });
    group.appendChild(grid);
    list.appendChild(group);
  });
  updateSelectionControls();
}
function renderAvailable(){
  var box=$('available-models');var pid=selectedPlatformId;var q=$('model-search').value.trim().toLowerCase();
  if(!availableModels.length){box.innerHTML=empty(pid?'点击“刷新模型”拉取上游列表。':'先选择一个渠道。');return}
  var existing={};mappings.forEach(function(m){if(m.platformId===pid)existing[m.originalName]=m.customName});
  var rows=availableModels.filter(function(m){return !q||m.toLowerCase().indexOf(q)!==-1});
  if(!rows.length){box.innerHTML=empty('没有匹配的模型。');return}
  box.innerHTML='';
  rows.forEach(function(m){
    var b=document.createElement('button');b.className='model-row';b.type='button';b.setAttribute('data-model',m);
    b.innerHTML='<strong>'+esc(m)+(existing[m]?'<span class="badge">已映射 '+esc(existing[m])+'</span>':'')+'</strong><span>'+esc(availablePlatform||'上游模型')+'</span>';
    b.onclick=function(){$('m-original').value=m;document.querySelectorAll('.model-row').forEach(function(x){x.classList.remove('sel')});b.classList.add('sel')};
    box.appendChild(b);
  });
}
async function addPlatform(){
  var body={name:$('p-name').value.trim(),baseUrl:$('p-url').value.trim(),apiKey:$('p-key').value.trim()};
  if(!body.name||!body.baseUrl||!body.apiKey){toast('请填写完整渠道信息');return}
  try{await api('/api/platforms',{method:'POST',body:JSON.stringify(body)});$('p-name').value='';$('p-url').value='';$('p-key').value='';toast('渠道已保存');await loadAll()}catch(e){toast(e.message)}
}
function editPlatform(idx){
  var p=platforms[idx];
  openModal('编辑渠道','<div class="field"><label for="e-name">渠道名称</label><input id="e-name" type="text" value="'+esc(p.name)+'"></div><div class="field"><label for="e-url">上游地址</label><input id="e-url" type="url" value="'+esc(p.baseUrl)+'"></div><div class="field"><label for="e-key">上游 API 密钥</label><input id="e-key" type="password" value="'+esc(p.apiKey)+'"></div>',async function(){
    try{await api('/api/platforms/'+encodeURIComponent(p.id),{method:'PUT',body:JSON.stringify({name:$('e-name').value.trim(),baseUrl:$('e-url').value.trim(),apiKey:$('e-key').value.trim()})});closeModal();toast('渠道已更新');await loadAll()}catch(e){toast(e.message)}
  });
}
function deletePlatform(id){confirmModal('删除渠道','删除渠道会同时删除它的模型映射，确定继续？',async function(){try{await api('/api/platforms/'+encodeURIComponent(id),{method:'DELETE'});closeModal();toast('渠道已删除');await loadAll()}catch(e){toast(e.message)}})}
async function refreshModels(){
  var pid=selectedPlatformId;if(!pid){toast('请先选择渠道');return}
  setLoading($('available-models'),'读取上游模型');
  try{var data=await api('/api/platforms/'+encodeURIComponent(pid)+'/models');availableModels=data.models||[];availablePlatform=data.platformName||'';renderAvailable();toast('模型列表已刷新')}catch(e){availableModels=[];availablePlatform='';$('available-models').innerHTML=empty(e.message)}
}
async function addMapping(){
  var body={platformId:selectedPlatformId,originalName:$('m-original').value.trim(),customName:$('m-custom').value.trim()};
  if(!body.platformId||!body.originalName||!body.customName){toast('请填写完整映射信息');return}
  try{await api('/api/mappings',{method:'POST',body:JSON.stringify(body)});$('m-original').value='';$('m-custom').value='';toast('映射已添加');await loadAll();renderAvailable()}catch(e){toast(e.message)}
}
function editMapping(idx){
  var m=mappings[idx];
  openModal('编辑模型名','<div class="field"><label>原始模型</label><input type="text" value="'+esc(m.originalName)+'" disabled></div><div class="field"><label for="edit-custom">自定义模型名</label><input id="edit-custom" type="text" value="'+esc(m.customName)+'"></div>',async function(){
    try{await api('/api/mappings/'+encodeURIComponent(m.id),{method:'PUT',body:JSON.stringify({customName:$('edit-custom').value.trim()})});closeModal();toast('映射已更新');await loadAll();renderAvailable()}catch(e){toast(e.message)}
  });
}
function deleteMapping(id){confirmModal('删除模型映射','确定删除这个模型映射？',async function(){try{await api('/api/mappings/'+encodeURIComponent(id),{method:'DELETE'});closeModal();toast('映射已删除');await loadAll();renderAvailable()}catch(e){toast(e.message)}})}
function visibleMappingIds(){var q=$('test-search').value.trim().toLowerCase();var names={};platforms.forEach(function(p){names[p.id]=p.name});return mappings.filter(function(m){var pn=names[m.platformId]||'未知平台';return !q||m.customName.toLowerCase().indexOf(q)!==-1||m.originalName.toLowerCase().indexOf(q)!==-1||pn.toLowerCase().indexOf(q)!==-1}).map(function(m){return m.id})}
function updateSelectionControls(){var ids=visibleMappingIds();var selected=Object.keys(selectedMappingIds).filter(function(id){return selectedMappingIds[id]}).length;var visibleSelected=ids.filter(function(id){return selectedMappingIds[id]}).length;$('select-all-models').textContent=ids.length&&visibleSelected===ids.length?'取消全选':'全选';$('bulk-delete-models').textContent=selected?'删除 '+selected:'批量删除'}
function toggleSelectAllModels(){var ids=visibleMappingIds();if(!ids.length)return;var all=ids.every(function(id){return selectedMappingIds[id]});ids.forEach(function(id){if(all)delete selectedMappingIds[id];else selectedMappingIds[id]=true});renderTestModels()}
function bulkDeleteMappings(){var ids=Object.keys(selectedMappingIds).filter(function(id){return selectedMappingIds[id]});if(!ids.length){toast('请先勾选模型');return}confirmModal('批量删除模型','将删除已勾选的 '+ids.length+' 个模型映射，确定继续？',async function(){try{await api('/api/mappings/bulk-delete',{method:'POST',body:JSON.stringify({ids:ids})});selectedMappingIds={};closeModal();toast('已批量删除');await loadAll();renderAvailable()}catch(e){toast(e.message)}})}
function testMapping(id){
  var m=mappings.find(function(x){return x.id===id});
  if(!m){toast('模型映射不存在');return}
  openModal('测试 '+m.customName,'<div class="field"><label for="test-prompt">测试提示词</label><textarea id="test-prompt" placeholder="输入一句测试内容">请用一句话回复：连接测试成功。</textarea></div><div class="test-result" id="test-result">测试结果会显示在这里。</div>',async function(){
    var result=$('test-result');result.className='test-result';result.textContent='正在请求上游模型...';
    try{
      var data=await api('/api/test',{method:'POST',body:JSON.stringify({mappingId:id,prompt:$('test-prompt').value.trim()})});
      result.className='test-result ok';
      result.textContent=(data.content||'上游返回为空')+'\\n\\n状态：'+data.status+' · 平台：'+data.platformName;
    }catch(e){
      result.className='test-result bad';
      result.textContent=e.message;
    }
  },'发送测试');
}

document.querySelectorAll('.tab').forEach(function(tab){
  tab.onclick=function(){
    document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('on');t.setAttribute('aria-selected','false')});
    document.querySelectorAll('.panel').forEach(function(p){p.classList.remove('on')});
    tab.classList.add('on');tab.setAttribute('aria-selected','true');$(tab.dataset.tab+'-panel').classList.add('on');
  };
});
$('endpoint-url').textContent=base;
$('add-platform').onclick=addPlatform;$('refresh-models').onclick=refreshModels;$('add-mapping').onclick=addMapping;
$('model-search').oninput=renderAvailable;
$('test-search').oninput=renderTestModels;
$('select-all-models').onclick=toggleSelectAllModels;
$('bulk-delete-models').onclick=bulkDeleteMappings;
$('m-platform-btn').onclick=function(e){e.stopPropagation();setPickerOpen(!$('m-platform-menu').classList.contains('open'))};
$('platform-picker').onclick=function(e){e.stopPropagation()};
$('modal').onclick=function(e){if(e.target===$('modal'))closeModal()};
$('theme-toggle').onclick=toggleTheme;
$('endpoint-copy').onclick=function(e){if(e.target===$('theme-toggle'))return;copyEndpoint()};
$('endpoint-copy').onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();copyEndpoint()}};
$('login-submit').onclick=submitLogin;
$('login-clear').onclick=clearLogin;
$('login-key').onkeydown=function(e){if(e.key==='Enter')submitLogin()};
document.addEventListener('click',function(){setPickerOpen(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeModal();setPickerOpen(false)}});
initTheme();
updateClock();
setInterval(updateClock,30000);
if(adminKey){
  verifyAdminKey().then(function(){hideLogin();loadAll()}).catch(function(){localStorage.removeItem('ai_proxy_admin_key');adminKey='';showLogin('本机保存的管理密钥已失效，请重新输入。')});
}else{
  showLogin();
}
})();
</script>
</body>
</html>`;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type, X-API-Key, X-Admin-Key',
  'Access-Control-Max-Age': '86400'
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

function errorResponse(message, status = 400, type = 'bad_request') {
  return jsonResponse({ error: { message, type } }, status);
}

function getBearerToken(request) {
  const auth = request.headers.get('Authorization') || '';
  if (auth.toLowerCase().startsWith('bearer ')) return auth.slice(7).trim();
  return request.headers.get('X-API-Key') || '';
}

async function safeEqual(a, b) {
  if (!a || !b) return false;
  const enc = new TextEncoder();
  const [da, db] = await Promise.all([
    crypto.subtle.digest('SHA-256', enc.encode(String(a))),
    crypto.subtle.digest('SHA-256', enc.encode(String(b)))
  ]);
  const aa = new Uint8Array(da);
  const bb = new Uint8Array(db);
  let diff = aa.length ^ bb.length;
  for (let i = 0; i < aa.length; i++) diff |= aa[i] ^ bb[i];
  return diff === 0;
}

async function requireAdmin(request, env) {
  if (!env.ADMIN_KEY) return { ok: false, response: errorResponse('ADMIN_KEY is not configured.', 503, 'setup_required') };
  const provided = request.headers.get('X-Admin-Key') || getBearerToken(request);
  if (!(await safeEqual(provided, env.ADMIN_KEY))) {
    return { ok: false, response: errorResponse('Unauthorized.', 401, 'unauthorized') };
  }
  return { ok: true };
}

async function requireClient(request, env) {
  if (!env.CLIENT_KEY) return { ok: false, response: errorResponse('CLIENT_KEY is not configured.', 503, 'setup_required') };
  const provided = getBearerToken(request);
  if (!(await safeEqual(provided, env.CLIENT_KEY))) {
    return { ok: false, response: errorResponse('Invalid API key.', 401, 'unauthorized') };
  }
  return { ok: true };
}

function getStore(env) {
  if (!env.AI_PROXY_DATA) throw new Error('AI_PROXY_DATA KV binding is missing.');
  return env.AI_PROXY_DATA;
}

async function readList(env, key) {
  const data = await getStore(env).get(key, 'json');
  return Array.isArray(data) ? data : [];
}

async function writeList(env, key, value) {
  await getStore(env).put(key, JSON.stringify(value));
}

async function getPlatforms(env) {
  return readList(env, 'platforms');
}

async function getMappings(env) {
  return readList(env, 'modelMappings');
}

async function readJson(request) {
  try {
    return await request.json();
  } catch (err) {
    throw new Error('Request body must be valid JSON.');
  }
}

function cleanString(value) {
  return String(value || '').trim();
}

function stripOpenAIBasePath(parsed) {
  parsed.hash = '';
  parsed.search = '';
  parsed.pathname = parsed.pathname.replace(/\/+$/, '').replace(/\/v1$/i, '') || '/';
  return parsed.toString().replace(/\/+$/, '');
}

function normalizeBaseUrl(value) {
  const raw = cleanString(value).replace(/\/+$/, '');
  let parsed;
  try {
    parsed = new URL(raw);
  } catch (err) {
    throw new Error('API 基础链接不是有效 URL。');
  }
  if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('API 基础链接只支持 http 或 https。');
  return stripOpenAIBasePath(parsed);
}

function publicPlatform(platform) {
  return {
    id: platform.id,
    name: platform.name,
    baseUrl: platform.baseUrl,
    apiKey: platform.apiKey,
    createdAt: platform.createdAt,
    updatedAt: platform.updatedAt
  };
}

function makeId(prefix) {
  return `${prefix}_${crypto.randomUUID()}`;
}

function validatePlatform(input) {
  const name = cleanString(input.name);
  const baseUrl = normalizeBaseUrl(input.baseUrl);
  const apiKey = cleanString(input.apiKey);
  if (!name) throw new Error('平台名称不能为空。');
  if (!apiKey) throw new Error('上游 API 密钥不能为空。');
  return { name, baseUrl, apiKey };
}

async function validateMapping(env, input, existingId = null) {
  const platformId = cleanString(input.platformId);
  const originalName = cleanString(input.originalName);
  const customName = cleanString(input.customName);
  if (!platformId) throw new Error('请选择平台。');
  if (!originalName) throw new Error('原始模型名不能为空。');
  if (!customName) throw new Error('自定义模型名不能为空。');
  const platforms = await getPlatforms(env);
  if (!platforms.some(p => p.id === platformId)) throw new Error('平台不存在。');
  const mappings = await getMappings(env);
  if (mappings.some(m => m.customName === customName && m.id !== existingId)) {
    throw new Error('自定义模型名已存在，请换一个名称。');
  }
  return { platformId, originalName, customName };
}

async function resolveRoute(env, options) {
  const [mappings, platforms] = await Promise.all([getMappings(env), getPlatforms(env)]);
  const mapping = mappings.find(m => options.mappingId ? m.id === options.mappingId : m.customName === options.customName);
  if (!mapping) throw new Error(options.customName ? `Model '${options.customName}' not found. Add a mapping in the admin panel.` : '模型映射不存在。');
  const platform = platforms.find(p => p.id === mapping.platformId);
  if (!platform) throw new Error('模型对应的平台不存在。');
  return { mapping, platform };
}

function buildUpstreamUrl(platform, apiPath, search = '') {
  return `${normalizeBaseUrl(platform.baseUrl)}/v1${apiPath}${search}`;
}

function upstreamJsonHeaders(platform, accept = 'application/json') {
  const headers = new Headers({
    'Authorization': `Bearer ${platform.apiKey}`,
    'Content-Type': 'application/json'
  });
  if (accept) headers.set('Accept', accept);
  return headers;
}

function mapRequestBody(body, mapping) {
  return { ...body, model: mapping.originalName };
}

function extractChatContent(data) {
  const choice = data && Array.isArray(data.choices) ? data.choices[0] : null;
  if (!choice) return '';
  const message = choice.message || {};
  if (typeof message.content === 'string') return message.content;
  if (Array.isArray(message.content)) {
    return message.content
      .map(part => typeof part === 'string' ? part : (part && (part.text || part.content)) || '')
      .filter(Boolean)
      .join('\n');
  }
  if (typeof choice.text === 'string') return choice.text;
  return '';
}

async function runMappingTest(env, input) {
  const mappingId = cleanString(input.mappingId);
  const customName = cleanString(input.customName);
  const prompt = cleanString(input.prompt) || '请用一句话回复：连接测试成功。';
  const { mapping, platform } = await resolveRoute(env, { mappingId, customName });

  const res = await fetch(buildUpstreamUrl(platform, '/chat/completions'), {
    method: 'POST',
    headers: upstreamJsonHeaders(platform),
    body: JSON.stringify(mapRequestBody({
      model: mapping.originalName,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0,
      max_tokens: 120
    }, mapping))
  });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch (err) {}
  if (!res.ok) {
    const message = (data && data.error && (data.error.message || data.error)) || text || `上游返回 ${res.status}`;
    throw new Error(String(message).slice(0, 500));
  }
  return {
    ok: true,
    status: res.status,
    platformName: platform.name,
    customName: mapping.customName,
    originalName: mapping.originalName,
    content: extractChatContent(data) || text.slice(0, 1000)
  };
}

async function handleApi(request, env, url) {
  const path = url.pathname;
  const parts = path.split('/').filter(Boolean);

  try {
    if (path === '/api/config' && request.method === 'GET') {
      return jsonResponse({
        adminKeyConfigured: Boolean(env.ADMIN_KEY),
        clientKeyConfigured: Boolean(env.CLIENT_KEY),
        kvConfigured: Boolean(env.AI_PROXY_DATA)
      });
    }

    const admin = await requireAdmin(request, env);
    if (!admin.ok) return admin.response;

    if (path === '/api/platforms' && request.method === 'GET') {
      return jsonResponse((await getPlatforms(env)).map(publicPlatform));
    }

    if (path === '/api/platforms' && request.method === 'POST') {
      const body = validatePlatform(await readJson(request));
      const platforms = await getPlatforms(env);
      const now = new Date().toISOString();
      const platform = { id: makeId('p'), ...body, createdAt: now, updatedAt: now };
      platforms.push(platform);
      await writeList(env, 'platforms', platforms);
      return jsonResponse(publicPlatform(platform), 201);
    }

    if (parts[0] === 'api' && parts[1] === 'platforms' && parts[2] && parts.length === 3) {
      const id = decodeURIComponent(parts[2]);
      if (request.method === 'PUT') {
        const body = validatePlatform(await readJson(request));
        const platforms = await getPlatforms(env);
        const idx = platforms.findIndex(p => p.id === id);
        if (idx === -1) return errorResponse('Platform not found.', 404, 'not_found');
        platforms[idx] = { ...platforms[idx], ...body, updatedAt: new Date().toISOString() };
        await writeList(env, 'platforms', platforms);
        return jsonResponse(publicPlatform(platforms[idx]));
      }
      if (request.method === 'DELETE') {
        const platforms = (await getPlatforms(env)).filter(p => p.id !== id);
        const mappings = (await getMappings(env)).filter(m => m.platformId !== id);
        await writeList(env, 'platforms', platforms);
        await writeList(env, 'modelMappings', mappings);
        return jsonResponse({ success: true });
      }
    }

    if (parts[0] === 'api' && parts[1] === 'platforms' && parts[2] && parts[3] === 'models' && request.method === 'GET') {
      const id = decodeURIComponent(parts[2]);
      const platform = (await getPlatforms(env)).find(p => p.id === id);
      if (!platform) return errorResponse('Platform not found.', 404, 'not_found');
      const upstreamBaseUrl = normalizeBaseUrl(platform.baseUrl);
      const res = await fetch(`${upstreamBaseUrl}/v1/models`, {
        headers: {
          'Authorization': `Bearer ${platform.apiKey}`,
          'Accept': 'application/json'
        }
      });
      if (!res.ok) return errorResponse(`Upstream model fetch failed with ${res.status}.`, res.status, 'upstream_error');
      const data = await res.json();
      const models = (Array.isArray(data.data) ? data.data : [])
        .map(item => typeof item === 'string' ? item : item && item.id)
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b));
      return jsonResponse({ platformId: platform.id, platformName: platform.name, models });
    }

    if (path === '/api/mappings' && request.method === 'GET') {
      return jsonResponse(await getMappings(env));
    }

    if (path === '/api/mappings/bulk-delete' && request.method === 'POST') {
      const body = await readJson(request);
      const ids = Array.isArray(body.ids) ? body.ids.map(cleanString).filter(Boolean) : [];
      if (!ids.length) return errorResponse('No mappings selected.', 400);
      const selected = new Set(ids);
      await writeList(env, 'modelMappings', (await getMappings(env)).filter(m => !selected.has(m.id)));
      return jsonResponse({ success: true, deleted: ids.length });
    }

    if (path === '/api/test' && request.method === 'POST') {
      return jsonResponse(await runMappingTest(env, await readJson(request)));
    }

    if (path === '/api/mappings' && request.method === 'POST') {
      const body = await validateMapping(env, await readJson(request));
      const mappings = await getMappings(env);
      const now = new Date().toISOString();
      const mapping = { id: makeId('m'), ...body, createdAt: now, updatedAt: now };
      mappings.push(mapping);
      await writeList(env, 'modelMappings', mappings);
      return jsonResponse(mapping, 201);
    }

    if (parts[0] === 'api' && parts[1] === 'mappings' && parts[2] && parts.length === 3) {
      const id = decodeURIComponent(parts[2]);
      if (request.method === 'PUT') {
        const mappings = await getMappings(env);
        const idx = mappings.findIndex(m => m.id === id);
        if (idx === -1) return errorResponse('Mapping not found.', 404, 'not_found');
        const input = { ...mappings[idx], ...(await readJson(request)) };
        const body = await validateMapping(env, input, id);
        mappings[idx] = { ...mappings[idx], ...body, updatedAt: new Date().toISOString() };
        await writeList(env, 'modelMappings', mappings);
        return jsonResponse(mappings[idx]);
      }
      if (request.method === 'DELETE') {
        await writeList(env, 'modelMappings', (await getMappings(env)).filter(m => m.id !== id));
        return jsonResponse({ success: true });
      }
    }

    return errorResponse('Not found.', 404, 'not_found');
  } catch (err) {
    return errorResponse(err.message || 'Request failed.', 400);
  }
}

async function handleModels(env) {
  const [mappings, platforms] = await Promise.all([getMappings(env), getPlatforms(env)]);
  const platformNames = Object.fromEntries(platforms.map(p => [p.id, p.name]));
  const used = new Set();
  const data = [];
  for (const mapping of mappings) {
    if (used.has(mapping.customName)) continue;
    used.add(mapping.customName);
    data.push({
      id: mapping.customName,
      object: 'model',
      created: 0,
      owned_by: platformNames[mapping.platformId] || 'unknown'
    });
  }
  return jsonResponse({ object: 'list', data });
}

async function handleProxy(request, env, url) {
  if (request.method !== 'POST') {
    return errorResponse('Only JSON POST requests with a model field can be proxied.', 405, 'method_not_allowed');
  }

  let body;
  try {
    body = await request.clone().json();
  } catch (err) {
    return errorResponse('Request body must be valid JSON.', 400);
  }

  const requestedModel = cleanString(body.model);
  if (!requestedModel) return errorResponse('No model in request.', 400);

  let route;
  try {
    route = await resolveRoute(env, { customName: requestedModel });
  } catch (err) {
    return errorResponse(err.message, 404, 'model_not_found');
  }
  const { mapping, platform } = route;

  const apiPath = url.pathname.slice('/v1'.length);
  const target = buildUpstreamUrl(platform, apiPath, url.search);
  const headers = upstreamJsonHeaders(platform, request.headers.get('Accept'));

  try {
    const upstream = await fetch(target, {
      method: request.method,
      headers,
      body: JSON.stringify(mapRequestBody(body, mapping)),
      redirect: 'follow'
    });
    const responseHeaders = new Headers(upstream.headers);
    Object.entries(CORS_HEADERS).forEach(([key, value]) => responseHeaders.set(key, value));
    responseHeaders.set('Cache-Control', 'no-store');
    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders
    });
  } catch (err) {
    return errorResponse(`Proxy error: ${err.message}`, 502, 'proxy_error');
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (path === '/' || path === '/admin') {
      return new Response(ADMIN_HTML, {
        headers: {
          ...CORS_HEADERS,
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
    }

    if (path.startsWith('/api/')) {
      return handleApi(request, env, url);
    }

    if (path === '/v1/models' && request.method === 'GET') {
      const auth = await requireClient(request, env);
      if (!auth.ok) return auth.response;
      return handleModels(env);
    }

    if (path.startsWith('/v1/') || path === '/v1') {
      const auth = await requireClient(request, env);
      if (!auth.ok) return auth.response;
      return handleProxy(request, env, url);
    }

    return errorResponse('Not found.', 404, 'not_found');
  }
};
