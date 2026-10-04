(() => {
  document.documentElement.classList.add('js');
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (min-width:861px)').matches;
  const svg = d => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---- render from data.js ---- */
  $('#serviceGrid').innerHTML = SERVICES.map(([t, d, p]) =>
    `<article class="card svc rv"><span class="ico">${svg(p)}</span><h3>${t}</h3><p>${d}</p><svg class="ar" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></article>`).join('');
  $('#toolList').innerHTML = TOOLS.map(t => `<li><span class="ico">${svg('M12 3l8 4.5v9L12 21l-8-4.5v-9z')}</span>${t}</li>`).join('');
  $('#skillList').innerHTML = SKILLS.map(t => `<li>${t}</li>`).join('');
  $('#steps').innerHTML = PROCESS.map(([t, d]) => `<li class="rv"><h3>${t}</h3><p>${d}</p></li>`).join('');
  $('#filters').innerHTML = FILTERS.map((f, i) => `<button type="button" data-f="${f}" aria-pressed="${i === 0}">${f}</button>`).join('');
  $('#projectGrid').innerHTML = PROJECTS.map((p, i) =>
    `<button type="button" class="pj ${p.size}" data-i="${i}" data-c="${esc(p.category)}" aria-label="View project: ${esc(p.title)}">
      <span class="im" data-p="0.05" style="--h:${(i * 47 + 255) % 360};${p.image ? `background-image:url('${p.image}')` : ''}"></span>${p.image ? '' : `<span class="ph" aria-hidden="true">${i + 1 < 10 ? '0' : ''}${i + 1}</span>`}
      <span class="ov"><span class="tt"><span class="meta">${esc(p.category)}</span><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p></span></span>
      <span class="go" aria-hidden="true"><svg class="ar" viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9"/></svg></span></button>`).join('');

  /* ---- nav ---- */
  const nav = $('#nav'), burger = $('#burger'), links = $('#links');
  const setMenu = o => { links.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); document.body.style.overflow = o ? 'hidden' : ''; };
  burger.onclick = () => setMenu(!links.classList.contains('open'));
  $$('a', links).forEach(a => a.onclick = () => setMenu(false));
  addEventListener('keydown', e => { if (e.key === 'Escape') { setMenu(false); closeModal(); } });
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) $$('.links a:not(.btn)').forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  ['home', 'about', 'services', 'work', 'experience', 'contact'].forEach(id => spy.observe($('#' + id)));

  /* ---- reveal + counters + timeline ---- */
  const count = el => {
    const t = +el.dataset.count; if (reduce) return el.textContent = t;
    const s = performance.now(), f = n => { const k = Math.min((n - s) / 1200, 1); el.textContent = Math.round(t * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); }; requestAnimationFrame(f);
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; e.target.classList.add('in');
    $$('[data-count]', e.target).forEach(count); io.unobserve(e.target);
  }), { threshold: .15 });
  $$('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });
  io.observe($('#tl'));

  /* ---- scroll: nav state, back to top, parallax ---- */
  const top = $('#top'), par = $$('[data-p]'); let tick = false;
  const onScroll = () => {
    const y = scrollY; nav.classList.toggle('sc', y > 30); top.classList.toggle('on', y > 700);
    if (fine && !reduce) par.forEach(el => { const r = el.getBoundingClientRect(); if (r.bottom < -100 || r.top > innerHeight + 100) return; el.style.translate = `0 ${(r.top + r.height / 2 - innerHeight / 2) * -el.dataset.p}px`; });
    tick = false;
  };
  addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true }); onScroll();
  top.onclick = () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

  /* ---- cursor glow + magnetic buttons ---- */
  if (fine && !reduce) {
    const g = $('#glow');
    addEventListener('pointermove', e => g.style.transform = `translate3d(${e.clientX - 240}px,${e.clientY - 240}px,0)`, { passive: true });
    $$('.mag').forEach(b => {
      b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .15}px,${(e.clientY - r.top - r.height / 2) * .25}px)`; });
      b.addEventListener('pointerleave', () => b.style.transform = '');
    });
  }

  /* ---- portfolio filter ---- */
  $('#filters').onclick = e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#filters button').forEach(x => x.setAttribute('aria-pressed', x === b));
    $$('.pj').forEach(p => p.classList.toggle('hide', b.dataset.f !== 'All' && p.dataset.c !== b.dataset.f));
  };

  /* ---- modals ---- */
  let lastFocus, openEl;
  const openModal = (m) => { lastFocus = document.activeElement; openEl = m; m.hidden = false; requestAnimationFrame(() => m.classList.add('on')); document.body.style.overflow = 'hidden'; (m.querySelector('input,.x') || m).focus(); };
  function closeModal() { if (!openEl) return; const m = openEl; m.classList.remove('on'); setTimeout(() => m.hidden = true, 300); openEl = null; document.body.style.overflow = ''; lastFocus && lastFocus.focus(); }
  $$('[data-open]').forEach(b => b.onclick = () => openModal($('#' + b.dataset.open)));
  $$('.modal').forEach(m => m.addEventListener('click', e => { if (e.target === m || e.target.closest('[data-close]')) closeModal(); }));
  $('#projectGrid').onclick = e => {
    const c = e.target.closest('.pj'); if (!c) return; const p = PROJECTS[c.dataset.i];
    if (p.link) return open(p.link, '_blank', 'noopener');
    $('#pmT').textContent = p.title; $('#pmCat').textContent = p.category; $('#pmD').textContent = p.description;
    $('#pmImg').style.cssText = p.image ? `background-image:url('${p.image}')` : `background:linear-gradient(150deg,#151821,#111319),radial-gradient(circle,#7C5CFF55,transparent)`;
    $('#pmImg').hidden = !p.image && false; openModal($('#projectModal'));
  };

})();
