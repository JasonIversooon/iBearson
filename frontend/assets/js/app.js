'use strict';
/** Tab navigation & dynamic content population **/

const TAB_SELECTOR = '[role="tab"]';
const PANELS_SELECTOR = '[role="tabpanel"]';

function activateTab(id) {
  const targetBtn = document.getElementById('tab-' + id);
  if (!targetBtn) return;
  const container = document.querySelector('[data-panel-container]');
  // capture starting height for smooth transition
  let startHeight = null;
  if (container) {
    startHeight = container.offsetHeight;
  }
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
  // move focus to panel for accessibility
  const panel = document.querySelector(`[data-panel="${id}"]`);
  if (panel) panel.focus({preventScroll:true});
  // Update combined heading text from the panel's own hidden h2 if present
  const hiddenHeading = panel ? panel.querySelector('h2') : null;
  const activeBarHeading = document.getElementById('active-panel-heading');
  if (hiddenHeading && activeBarHeading) {
    activeBarHeading.textContent = hiddenHeading.textContent.trim();
  }
  // animate height to new panel height
  if (container && panel) {
    const endHeight = panel.offsetHeight;
    if (startHeight !== null && endHeight !== startHeight) {
      container.style.height = startHeight + 'px';
      // force reflow
      void container.offsetWidth;
      container.style.height = endHeight + 'px';
      container.addEventListener('transitionend', function handler(ev){
        if (ev.propertyName === 'height') {
          container.style.height = '';
          container.removeEventListener('transitionend', handler);
        }
      });
    }
  }
  history.replaceState(null, '', '#' + id);
}

function onClickTab(e) {
  const id = e.currentTarget.dataset.tab;
  activateTab(id);
}

function onKeyDownTab(e) {
  const current = e.currentTarget;
  const tabs = Array.from(document.querySelectorAll(TAB_SELECTOR));
  const idx = tabs.indexOf(current);
  if (['ArrowRight','ArrowDown'].includes(e.key)) {
    e.preventDefault();
    const next = tabs[(idx + 1) % tabs.length];
    next.focus(); activateTab(next.dataset.tab);
  } else if (['ArrowLeft','ArrowUp'].includes(e.key)) {
    e.preventDefault();
    const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
    prev.focus(); activateTab(prev.dataset.tab);
  } else if (e.key === 'Home') { e.preventDefault(); tabs[0].focus(); activateTab(tabs[0].dataset.tab); }
  else if (e.key === 'End') { e.preventDefault(); const last = tabs[tabs.length-1]; last.focus(); activateTab(last.dataset.tab); }
}

function populateServices() {
  const services = [
    { title: 'Web Design', body: 'Modern, accessible UI crafted with a design system mindset.' },
    { title: 'Full-Stack Dev', body: 'End-to-end feature development with performance focus.' },
    { title: 'APIs & Integrations', body: 'Robust REST/GraphQL APIs and third‑party integrations.' },
    { title: 'Testing & QA', body: 'Automated tests and CI pipelines to ensure reliability.' }
  ];
  const wrap = document.querySelector('.what-i-do');
  if (!wrap) return;
  wrap.innerHTML = services.map(s => `\n    <div class="service-card">\n      <h3>${s.title}</h3>\n      <p>${s.body}</p>\n    </div>`).join('');
}

function populateProjects() {
  const projects = [
    { title: 'Portfolio Template', desc: 'Lightweight static site scaffold with accessible tab navigation.', links: { code: '#', live: '#' } },
    { title: 'API Boilerplate', desc: 'Node/Express starter with auth, testing, and structured logging.', links: { code: '#', live: '#' } },
    { title: 'Design System', desc: 'Token-based theming library and reusable component catalog.', links: { code: '#', live: '#' } },
    { title: 'Data Dashboard', desc: 'Interactive charts & real-time updates via WebSocket.', links: { code: '#', live: '#' } }
  ];
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `\n    <div class="project-card">\n      <h3>${p.title}</h3>\n      <p>${p.desc}</p>\n      <div class="project-links">\n        <a href="${p.links.code}" aria-label="Source code for ${p.title}">Code</a>\n        <a href="${p.links.live}" aria-label="Live site for ${p.title}">Live</a>\n      </div>\n    </div>`).join('');
}

function populateCertificates() {
  const certs = [
    { name: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', year: 2024 },
    { name: 'Google UX Design', org: 'Coursera', year: 2023 },
    { name: 'Professional Scrum Master I', org: 'Scrum.org', year: 2023 },
    { name: 'Frontend Developer Certification', org: 'FreeCodeCamp', year: 2022 }
  ];
  const list = document.querySelector('.cert-list');
  if (!list) return;
  list.innerHTML = certs.map(c => `\n    <li class="cert-item">\n      <h3>${c.name}</h3>\n      <span>${c.org} • ${c.year}</span>\n    </li>`).join('');
}

function handleContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.style.color = 'var(--color-accent)';
      return;
    }
    // Simulate async send
    status.textContent = 'Sending...';
    setTimeout(() => {
      status.textContent = 'Message sent! (Simulated)';
      status.style.color = 'var(--color-text-soft)';
      form.reset();
    }, 900);
  });
}

function initFromHash() {
  const hash = window.location.hash.replace('#','');
  const valid = ['about','projects','certificates','contact'];
  if (valid.includes(hash) && hash !== 'about') {
    activateTab(hash);
  }
}

function initTabs() {
  document.querySelectorAll(TAB_SELECTOR).forEach(btn => {
    btn.addEventListener('click', onClickTab);
    btn.addEventListener('keydown', onKeyDownTab);
  });
  initFromHash();
}

function init() {
  populateServices();
  populateProjects();
  populateCertificates();
  handleContactForm();
  initTabs();
  // Set initial container explicit height to match first panel then release
  const container = document.querySelector('[data-panel-container]');
  const firstPanel = container ? container.querySelector('[role="tabpanel"]:not([hidden])') : null;
  if (container && firstPanel) {
    container.style.height = firstPanel.offsetHeight + 'px';
    requestAnimationFrame(()=>{ container.style.height=''; });
  }
}

document.addEventListener('DOMContentLoaded', init);
