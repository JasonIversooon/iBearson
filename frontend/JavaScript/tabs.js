// Tab navigation & dynamic heading update
const TAB_SELECTOR = '[role="tab"]';
const PANELS_SELECTOR = '[role="tabpanel"]';

export function activateTab(id) {
  const targetBtn = document.getElementById('tab-' + id);
  if (!targetBtn) return;
  const allTabs = document.querySelectorAll(TAB_SELECTOR);
  const allPanels = document.querySelectorAll(PANELS_SELECTOR);
  allTabs.forEach(t => {
    const isActive = t === targetBtn;
    t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    t.tabIndex = isActive ? 0 : -1;
  });
  allPanels.forEach(p => {
    const match = p.dataset.panel === id;
    if (match) p.removeAttribute('hidden'); else p.setAttribute('hidden','');
  });
  const panel = document.querySelector(`[data-panel="${id}"]`);
  if (panel) panel.focus({preventScroll:true});
  const hiddenHeading = panel ? panel.querySelector('h2') : null;
  const activeBarHeading = document.getElementById('active-panel-heading');
  if (hiddenHeading && activeBarHeading) {
    activeBarHeading.textContent = hiddenHeading.textContent.trim();
  }
  history.replaceState(null, '', '#' + id);
}

function onClickTab(e){ activateTab(e.currentTarget.dataset.tab); }

function onKeyDownTab(e){
  const current = e.currentTarget;
  const tabs = Array.from(document.querySelectorAll(TAB_SELECTOR));
  const idx = tabs.indexOf(current);
  if ([ 'ArrowRight','ArrowDown' ].includes(e.key)) {
    e.preventDefault();
    const next = tabs[(idx + 1) % tabs.length];
    next.focus(); activateTab(next.dataset.tab);
  } else if ([ 'ArrowLeft','ArrowUp' ].includes(e.key)) {
    e.preventDefault();
    const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
    prev.focus(); activateTab(prev.dataset.tab);
  } else if (e.key === 'Home') { e.preventDefault(); tabs[0].focus(); activateTab(tabs[0].dataset.tab); }
  else if (e.key === 'End') { e.preventDefault(); const last = tabs[tabs.length-1]; last.focus(); activateTab(last.dataset.tab); }
}

function initFromHash(){
  const hash = window.location.hash.replace('#','');
  const valid = ['about','projects','certificates','contact'];
  if (valid.includes(hash) && hash !== 'about') activateTab(hash);
}

export function initTabs(){
  document.querySelectorAll(TAB_SELECTOR).forEach(btn => {
    btn.addEventListener('click', onClickTab);
    btn.addEventListener('keydown', onKeyDownTab);
  });
  initFromHash();
}
