(() => {
  const examples = {
    classic: `# RA Fahim\nWeb Developer & Creator · Dhaka, Bangladesh\n[rafahim.com](https://rafahim.com) · [github.com/rafahim](https://github.com/rafahim) · [dev@rafahim.com](mailto:dev@rafahim.com)\n\n## Profile\nFull-stack web developer and creator with 1 year of hands-on experience building responsive websites, browser tools, dashboards, and API-driven products. Focused on clean UX, practical engineering, and performance.\n\n## Experience\n### Full-stack Web Developer · Independent\n2025 — Present\n- Built responsive HTML, CSS, and JavaScript products with accessible interfaces.\n- Shipped PHP, Node.js, WordPress, and API-integrated web projects.\n- Improved page structure, SEO metadata, and reusable component patterns.\n\n## Projects\n### Markdown Resume Builder\nBrowser-based Markdown editor with live A4 preview, local autosave, five resume templates, and native print-to-PDF export.\n\n## Skills\n- Frontend: HTML5, CSS3, JavaScript, responsive UI, accessibility\n- Backend: Node.js, Express.js, PHP, REST APIs\n- Platforms: WordPress, Elementor, WooCommerce\n- Tools: Git, GitHub, JSON, SQL, browser APIs\n\n## Education\n### Self-directed Web Development\n2025 — Present\nPractical learning through client work, product builds, documentation, and shipping complete projects.`,
    modern: `# RA Fahim\nWeb Developer & Creator · Dhaka, Bangladesh\n[rafahim.com](https://rafahim.com) · [github.com/rafahim](https://github.com/rafahim) · [linkedin.com/in/rafahimn](https://linkedin.com/in/rafahimn)\n\n> Full-stack developer with a product-minded approach to fast, accessible, useful web experiences.\n\n## Snapshot\n- 1 year of practical web development experience\n- Strong focus on responsive frontend and creator-focused tools\n- Comfortable with JavaScript, PHP, Node.js, WordPress, and REST APIs\n\n## Selected Experience\n### Independent Developer\n**2025 — Present**\nDesigned and shipped websites, internal tools, and browser applications for real-world use cases.\n\n- Built component-driven interfaces without unnecessary dependencies.\n- Integrated forms, payments, APIs, databases, and content workflows.\n- Prioritized page speed, responsive layouts, and clear content hierarchy.\n\n## Featured Projects\n### Portfolio & Creator Platform\nA personal portfolio focused on project storytelling, SEO, premium UI, and reusable content.\n\n### Office Management Web App\nAdministrative workflows for registrations, notifications, logs, settings, and connected site operations.\n\n## Capabilities\n**Frontend:** HTML5, CSS3, Vanilla JavaScript, responsive design\n\n**Backend:** Node.js, Express.js, PHP, REST, SQL\n\n**CMS:** WordPress, Elementor, WooCommerce\n\n## Contact\nEmail: [dev@rafahim.com](mailto:dev@rafahim.com)\nLocation: Dhaka, Bangladesh`,
    developer: `# RA Fahim\nWeb Developer & Creator\nDhaka, Bangladesh · [rafahim.com](https://rafahim.com) · [github.com/rafahim](https://github.com/rafahim) · [dev@rafahim.com](mailto:dev@rafahim.com)\n\n\`\`\`text\nFULL-STACK WEB DEVELOPMENT · PRODUCT BUILDING · CREATOR TOOLS\n\`\`\`\n\n## Summary\nFull-stack web developer with 1 year of practical experience building web applications, websites, utilities, dashboards, and API integrations. Enjoys shipping lightweight browser-first products with clear UI and maintainable code.\n\n## Stack\n- JavaScript, HTML5, CSS3, PHP\n- Node.js, Express.js, REST APIs\n- SQL, JSON, browser storage, Web APIs\n- WordPress, Elementor, WooCommerce\n- Git, GitHub, responsive design, technical SEO\n\n## Experience\n### Independent Full-stack Developer\n2025 — Present\n- Built small-to-medium web products from specification through UI, logic, data integration, and documentation.\n- Worked with browser storage, APIs, forms, email/SMS integrations, authentication, and content workflows.\n- Created reusable layouts with an emphasis on accessibility and mobile-first behavior.\n\n## Projects\n### Markdown Resume Builder\n**HTML5 · CSS3 · Vanilla JS · marked.js**\n- Split editor and A4 preview with template switching.\n- Local version history, Markdown import/export, JSON backup, and custom CSS.\n- Native browser print flow designed for clean ATS-friendly PDF output.\n\n### Bangla Text Tools\n**HTML5 · CSS3 · Vanilla JS**\n- Offline utility suite with live text metrics and Bengali writing helpers.\n\n## Education\nSelf-directed Web Development · 2025 — Present`,
    minimal: `# RA Fahim\nWeb Developer & Creator · Dhaka, Bangladesh\n[rafahim.com](https://rafahim.com) · [dev@rafahim.com](mailto:dev@rafahim.com)\n\n## Profile\nFull-stack web developer with 1 year of practical experience building responsive websites, utilities, and API-backed tools. Strong focus on clear information hierarchy, accessibility, SEO, and reliable browser-first experiences.\n\n## Experience\n### Independent Web Developer\n2025 — Present\n- Built lightweight web experiences with HTML5, CSS3, Vanilla JavaScript, PHP, and Node.js.\n- Delivered responsive interfaces and structured content systems for client and personal projects.\n- Added SEO metadata, schema, reusable UI patterns, and practical documentation.\n\n## Skills\n- HTML5, CSS3, JavaScript, responsive UI, accessibility\n- Node.js, Express.js, PHP, REST APIs, SQL, JSON\n- WordPress, Elementor, WooCommerce, Git, GitHub\n\n## Projects\n### Portfolio Platform\nPersonal portfolio focused on premium presentation, project storytelling, and technical SEO.\n\n### Browser Tooling\nPrivacy-first utilities designed to run locally without a backend account.\n\n## Education\nSelf-directed Web Development · 2025 — Present`,
    twocolumn: `# RA Fahim\nWeb Developer & Creator\nDhaka, Bangladesh · [rafahim.com](https://rafahim.com) · [github.com/rafahim](https://github.com/rafahim) · [dev@rafahim.com](mailto:dev@rafahim.com)\n\n## Skills\n- JavaScript\n- HTML5 / CSS3\n- Node.js / Express.js\n- PHP / SQL\n- WordPress / Elementor\n- REST APIs / JSON\n- Git / GitHub\n- SEO / Accessibility\n\n## Experience\n### Independent Developer\n2025 — Present\n- Built websites, browser apps, dashboards, and API-driven utilities.\n- Integrated forms, databases, payments, notifications, and content workflows.\n- Created responsive interfaces with reusable CSS and JavaScript patterns.\n\n## Projects\n### Markdown Resume Builder\nMarkdown editor, A4 preview, local versioning, JSON backup, and native PDF export.\n\n### BD District Info API\nNode.js REST API for division, district, upazila, and search data.\n\n### Bangla Text Tools\nOffline writing and text utility suite for Bengali content workflows.\n\n## Contact\nWebsite: [rafahim.com](https://rafahim.com)\nGitHub: [github.com/rafahim](https://github.com/rafahim)\nLinkedIn: [linkedin.com/in/rafahimn](https://linkedin.com/in/rafahimn)`
  };

  const i18n = {
    en: { appTitle:'Markdown Resume Builder', appSubtitle:'Write in Markdown. Preview A4. Export PDF.', exportPdf:'Export PDF', template:'Template', zoom:'Zoom', editor:'EDITOR', preview:'PREVIEW', importMd:'Import .md', example:'Example', history:'History', exportJson:'Export .json', importJson:'Import .json', customCss:'Custom CSS', font:'Font', accent:'Accent', textColor:'Text', spacing:'Spacing', privacy:'Private in your browser', savedVersions:'Saved versions', customCssTitle:'Custom CSS', cancel:'Cancel', apply:'Apply', chooseExample:'Choose an example' },
    bn: { appTitle:'Markdown Resume Builder', appSubtitle:'Markdown লিখুন। A4 দেখুন। PDF Export করুন।', exportPdf:'PDF Export', template:'টেমপ্লেট', zoom:'জুম', editor:'এডিটর', preview:'প্রিভিউ', importMd:'MD Import', example:'উদাহরণ', history:'ইতিহাস', exportJson:'JSON Export', importJson:'JSON Import', customCss:'Custom CSS', font:'ফন্ট', accent:'রঙ', textColor:'টেক্সট', spacing:'স্পেসিং', privacy:'আপনার ব্রাউজারেই ব্যক্তিগত', savedVersions:'সংরক্ষিত ভার্সন', customCssTitle:'Custom CSS', cancel:'বাতিল', apply:'প্রয়োগ', chooseExample:'উদাহরণ নির্বাচন করুন' }
  };

  const state = {
    lang:'en',
    content: examples.classic,
    template:'classic',
    zoom:0.9,
    theme:'light',
    font:'Inter,system-ui,sans-serif',
    accent:'#2563eb',
    textColor:'#111827',
    spacing:1,
    customCss:'',
    history:[]
  };

  const els = {
    editor:document.getElementById('markdownEditor'),
    highlight:document.getElementById('highlightLayer'),
    paper:document.getElementById('resumePaper'),
    content:document.getElementById('resumeContent'),
    template:document.getElementById('templateSelect'),
    zoom:document.getElementById('zoomSelect'),
    font:document.getElementById('fontSelect'),
    accent:document.getElementById('accentColor'),
    text:document.getElementById('textColor'),
    spacing:document.getElementById('spacingRange'),
    theme:document.getElementById('themeToggle'),
    language:document.getElementById('languageToggle'),
    status:document.getElementById('saveStatus'),
    wordStats:document.getElementById('wordStats'),
    historyList:document.getElementById('historyList'),
    customCssEditor:document.getElementById('customCssEditor'),
    toast:document.getElementById('toast')
  };

  const escapeHtml = value => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const highlightMarkdown = value => {
    let text = escapeHtml(value).replace(/ /g,'&nbsp;');
    text = text.replace(/^(#{1,6})\s(.+)$/gm,'<span class="token-heading">$1&nbsp;$2</span>');
    text = text.replace(/(\*\*[^\n]+?\*\*)/g,'<span class="token-bold">$1</span>');
    text = text.replace(/(\*[^\n*]+\*)/g,'<span class="token-italic">$1</span>');
    text = text.replace(/(\[[^\]]+\]\([^\)]+\))/g,'<span class="token-link">$1</span>');
    text = text.replace(/(^|\n)([-*]\s|\d+\.\s)/g,'$1<span class="token-list">$2</span>');
    text = text.replace(/(^|\n)(>&nbsp;.*)$/gm,'$1<span class="token-quote">$2</span>');
    text = text.replace(/(```[\s\S]*?```)/g,'<span class="token-code">$1</span>');
    return text || '&nbsp;';
  };

  const sanitizeMarkdown = value => value.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi,'').replace(/on[a-z]+\s*=\s*["'][^"']*["']/gi,'');

  const render = () => {
    state.content = els.editor.value;
    els.highlight.innerHTML = highlightMarkdown(state.content);
    els.content.innerHTML = window.marked.parse(sanitizeMarkdown(state.content), {breaks:true,gfm:true});
    els.paper.className = `resume-paper template-${state.template}`;
    els.paper.style.setProperty('--paper-scale', state.zoom);
    els.paper.style.setProperty('--resume-font', state.font);
    els.paper.style.setProperty('--accent', state.accent);
    els.paper.style.setProperty('--text-color', state.textColor);
    els.paper.style.setProperty('--resume-spacing', state.spacing);
    document.documentElement.style.setProperty('--accent', state.accent);
    document.documentElement.style.setProperty('--paper-scale', state.zoom);
    document.body.dataset.theme = state.theme;
    updateStats();
  };

  const updateStats = () => {
    const text = state.content.trim();
    const words = text ? text.split(/\s+/).length : 0;
    els.wordStats.textContent = `${words} words · ${state.content.length} characters`;
  };

  const storageKey = 'ra-fahim-markdown-resume-builder-v1';
  const historyKey = 'ra-fahim-markdown-resume-history-v1';

  const saveState = (historyEntry=true) => {
    const payload = {...state, history:undefined};
    localStorage.setItem(storageKey, JSON.stringify(payload));
    if (historyEntry) {
      const item = {id:crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),timestamp:new Date().toISOString(),content:state.content,template:state.template,font:state.font,accent:state.accent,textColor:state.textColor,spacing:state.spacing,customCss:state.customCss};
      state.history = [item,...state.history].slice(0,20);
      localStorage.setItem(historyKey, JSON.stringify(state.history));
    }
    els.status.textContent = 'Saved locally';
    els.status.classList.remove('saving');
    els.status.classList.add('saved');
  };

  let saveTimer;
  const queueSave = () => {
    els.status.textContent = 'Saving…';
    els.status.classList.add('saving');
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => saveState(true), 700);
  };

  const loadState = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
      const history = JSON.parse(localStorage.getItem(historyKey) || '[]');
      if (saved) Object.assign(state, saved);
      state.history = Array.isArray(history) ? history.slice(0,20) : [];
    } catch {}
    els.editor.value = state.content || examples.classic;
    els.template.value = state.template || 'classic';
    els.zoom.value = String(state.zoom || .9);
    els.font.value = state.font || 'Inter,system-ui,sans-serif';
    els.accent.value = state.accent || '#2563eb';
    els.text.value = state.textColor || '#111827';
    els.spacing.value = String(state.spacing || 1);
    els.customCssEditor.value = state.customCss || '';
  };

  const setLanguage = lang => {
    state.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(node => { const key=node.dataset.i18n; node.textContent=i18n[lang][key] || node.textContent; });
    els.language.textContent = lang === 'en' ? 'বাংলা' : 'EN';
    localStorage.setItem(storageKey, JSON.stringify({...state,history:undefined}));
  };

  const toast = message => {
    els.toast.textContent = message;
    els.toast.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer=setTimeout(() => els.toast.classList.remove('show'),1800);
  };

  const openModal = id => document.getElementById(id).showModal();
  const closeModal = id => document.getElementById(id).close();

  const insertAtSelection = (before,after='',fallback='') => {
    const start = els.editor.selectionStart;
    const end = els.editor.selectionEnd;
    const selected = els.editor.value.slice(start,end) || fallback;
    els.editor.setRangeText(`${before}${selected}${after}`,start,end,'select');
    render();
    queueSave();
    els.editor.focus();
  };

  const applyLinePrefix = prefix => {
    const value=els.editor.value;
    const start=els.editor.selectionStart;
    const end=els.editor.selectionEnd;
    const lineStart=value.lastIndexOf('\n',start-1)+1;
    const lineEnd=value.indexOf('\n',end);
    const actualEnd=lineEnd===-1?value.length:lineEnd;
    const block=value.slice(lineStart,actualEnd);
    const updated=block.split('\n').map(line => line.startsWith(prefix)?line:`${prefix}${line}`).join('\n');
    els.editor.setRangeText(updated,lineStart,actualEnd,'select');
    render();
    queueSave();
    els.editor.focus();
  };

  const loadExample = template => {
    state.template=template;
    els.template.value=template;
    const fileBacked = examples[template] || examples.classic;
    els.editor.value=fileBacked;
    render();
    saveState(true);
    closeModal('exampleModal');
    toast(`Loaded ${template} example`);
  };

  const showHistory = () => {
    els.historyList.innerHTML='';
    if (!state.history.length) {
      els.historyList.innerHTML='<div class="history-item"><div class="history-meta"><strong>No saved versions yet</strong><span>Edit the document to create local versions.</span></div></div>';
    } else {
      state.history.forEach(item => {
        const row=document.createElement('div');
        row.className='history-item';
        const meta=document.createElement('div');
        meta.className='history-meta';
        const date=new Date(item.timestamp);
        meta.innerHTML=`<strong>${escapeHtml(item.template)} · ${date.toLocaleString()}</strong><span>${escapeHtml(item.content.slice(0,90).replace(/\n/g,' '))}</span>`;
        const actions=document.createElement('div');
        actions.className='history-actions';
        const restore=document.createElement('button');
        restore.className='ghost-btn'; restore.type='button'; restore.textContent='Restore';
        restore.addEventListener('click',()=>{els.editor.value=item.content;state.template=item.template||'classic';state.font=item.font||state.font;state.accent=item.accent||state.accent;state.textColor=item.textColor||state.textColor;state.spacing=item.spacing||state.spacing;state.customCss=item.customCss||'';loadForm();render();saveState(false);closeModal('historyModal');toast('Version restored');});
        actions.appendChild(restore);row.append(meta,actions);els.historyList.appendChild(row);
      });
    }
    openModal('historyModal');
  };

  const loadForm = () => {
    els.template.value=state.template;els.zoom.value=String(state.zoom);els.font.value=state.font;els.accent.value=state.accent;els.text.value=state.textColor;els.spacing.value=String(state.spacing);els.customCssEditor.value=state.customCss;
  };

  const exportText = (name,type,text) => {
    const blob=new Blob([text],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();URL.revokeObjectURL(url);
  };

  const exportJson = () => {
    const payload={version:1,app:'Markdown Resume Builder',content:state.content,template:state.template,zoom:state.zoom,theme:state.theme,font:state.font,accent:state.accent,textColor:state.textColor,spacing:state.spacing,customCss:state.customCss,exportedAt:new Date().toISOString()};
    exportText('resume.json','application/json',JSON.stringify(payload,null,2));toast('JSON exported');
  };

  const importMd = file => { const reader=new FileReader();reader.onload=()=>{els.editor.value=String(reader.result||'');render();saveState(true);toast('Markdown imported')};reader.readAsText(file); };
  const importJson = file => { const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(String(reader.result||''));Object.assign(state,{content:data.content||'',template:data.template||'classic',zoom:data.zoom||.9,theme:data.theme||'light',font:data.font||state.font,accent:data.accent||state.accent,textColor:data.textColor||state.textColor,spacing:data.spacing||1,customCss:data.customCss||''});els.editor.value=state.content;loadForm();render();saveState(true);toast('JSON imported')}catch{toast('Invalid JSON file')}};reader.readAsText(file); };

  const printPdf = () => { render();document.body.classList.add('printing');setTimeout(()=>{window.print();document.body.classList.remove('printing')},80); };

  const bind = () => {
    els.editor.addEventListener('input',()=>{state.content=els.editor.value;render();queueSave()});
    els.editor.addEventListener('scroll',()=>{els.highlight.style.transform=`translateY(${-els.editor.scrollTop}px)`});
    els.editor.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='b'){e.preventDefault();insertAtSelection('**','**','bold text')}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='i'){e.preventDefault();insertAtSelection('*','*','italic text')}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'){e.preventDefault();saveState(true);toast('Saved locally')}});
    document.querySelectorAll('.tool-btn').forEach(btn=>btn.addEventListener('click',()=>{const action=btn.dataset.action;if(action==='bold')insertAtSelection('**','**','bold text');if(action==='italic')insertAtSelection('*','*','italic text');if(action==='heading')applyLinePrefix('## ');if(action==='link')insertAtSelection('[','](https://example.com)','link');if(action==='bullet')applyLinePrefix('- ');if(action==='numbered')applyLinePrefix('1. ');if(action==='quote')applyLinePrefix('> ');if(action==='code')insertAtSelection('`','`','code') }));
    els.template.addEventListener('change',()=>{state.template=els.template.value;render();queueSave()});
    els.zoom.addEventListener('change',()=>{state.zoom=Number(els.zoom.value);render();queueSave()});
    els.font.addEventListener('change',()=>{state.font=els.font.value;render();queueSave()});
    els.accent.addEventListener('input',()=>{state.accent=els.accent.value;render();queueSave()});
    els.text.addEventListener('input',()=>{state.textColor=els.text.value;render();queueSave()});
    els.spacing.addEventListener('input',()=>{state.spacing=Number(els.spacing.value);render();queueSave()});
    els.theme.addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark';render();saveState(false)});
    els.language.addEventListener('click',()=>setLanguage(state.lang==='en'?'bn':'en'));
    document.getElementById('printBtn').addEventListener('click',printPdf);
    document.getElementById('importMdBtn').addEventListener('click',()=>document.getElementById('mdFileInput').click());
    document.getElementById('mdFileInput').addEventListener('change',e=>e.target.files[0]&&importMd(e.target.files[0]));
    document.getElementById('loadExampleBtn').addEventListener('click',()=>openModal('exampleModal'));
    document.querySelectorAll('.example-card').forEach(card=>card.addEventListener('click',()=>loadExample(card.dataset.example)));
    document.getElementById('historyBtn').addEventListener('click',showHistory);
    document.getElementById('exportJsonBtn').addEventListener('click',exportJson);
    document.getElementById('importJsonBtn').addEventListener('click',()=>document.getElementById('jsonFileInput').click());
    document.getElementById('jsonFileInput').addEventListener('change',e=>e.target.files[0]&&importJson(e.target.files[0]));
    document.getElementById('customCssBtn').addEventListener('click',()=>openModal('cssModal'));
    document.getElementById('applyCssBtn').addEventListener('click',()=>{state.customCss=els.customCssEditor.value;document.getElementById('customCssRuntime')?.remove();const style=document.createElement('style');style.id='customCssRuntime';style.textContent=state.customCss;document.head.appendChild(style);saveState(true);closeModal('cssModal');toast('Custom CSS applied')});
    document.querySelectorAll('[data-close-modal]').forEach(btn=>btn.addEventListener('click',()=>closeModal(btn.dataset.closeModal)));
    window.addEventListener('beforeunload',()=>saveState(false));
  };

  loadState();bind();render();setLanguage(state.lang || 'en');
  if(state.customCss){const style=document.createElement('style');style.id='customCssRuntime';style.textContent=state.customCss;document.head.appendChild(style)}
})();
