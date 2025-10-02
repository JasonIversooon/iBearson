'use strict';
/** Tab navigation & dynamic content population **/

const TAB_SELECTOR = '[role="tab"]';
const PANELS_SELECTOR = '[role="tabpanel"]';

function activateTab(id) {
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
  // move focus to panel for accessibility
  const panel = document.querySelector(`[data-panel="${id}"]`);
  if (panel) panel.focus({preventScroll:true});
  // Update combined heading text from the panel's own hidden h2 if present
  const hiddenHeading = panel ? panel.querySelector('h2') : null;
  const activeBarHeading = document.getElementById('active-panel-heading');
  if (hiddenHeading && activeBarHeading) {
    activeBarHeading.textContent = hiddenHeading.textContent.trim();
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
  wrap.innerHTML = services.map(s => `\n    <div class="service-card fade-in" tabindex="0">\n      <h3>${s.title}</h3>\n      <p>${s.body}</p>\n    </div>`).join('');
}

// After swapping layouts: projects now use the certificate list style (ul.cert-list > li.cert-item)
function populateProjects() {
  const projects = [
    { title: 'Portfolio Template', desc: 'Lightweight static site scaffold with accessible tab navigation.', links: { code: '#', live: '#' } },
    { title: 'API Boilerplate', desc: 'Node/Express starter with auth, testing, and structured logging.', links: { code: '#', live: '#' } },
    { title: 'Design System', desc: 'Token-based theming library and reusable component catalog.', links: { code: '#', live: '#' } },
    { title: 'Data Dashboard', desc: 'Interactive charts & real-time updates via WebSocket.', links: { code: '#', live: '#' } },
    { title: 'Accessibility Toolkit', desc: 'Collection of accessible UI patterns with ARIA helpers.', links: { code: '#', live: '#' } },
    { title: 'Test Harness', desc: 'Configurable Jest/Playwright harness for full-stack apps.', links: { code: '#', live: '#' } }
  ];
  const list = document.querySelector('#panel-projects .cert-list');
  if (!list) return;
  const eyeIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z"/><circle cx="12" cy="12" r="3"/></svg>';
  const gitHubIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.94c.58.1.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.3-1.69-1.3-1.69-1.07-.74.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.1-.76.41-1.28.74-1.57-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.76.11 3.05.75.81 1.2 1.85 1.2 3.11 0 4.43-2.7 5.41-5.28 5.69.42.36.79 1.07.79 2.17v3.22c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>';
  list.innerHTML = projects.map(p => `\n    <li class=\"cert-item fade-in\" tabindex=\"0\">\n      <div class=\"cert-head\">\n        <div class=\"cert-meta\">\n          <h3>${p.title}</h3>\n          <span>${p.desc}</span>\n        </div>\n        <div class=\"cert-links\">\n          <a class=\"icon-btn\" href=\"${p.links.code}\" aria-label=\"GitHub repository for ${p.title}\">${gitHubIcon}</a>\n          <a class=\"icon-btn\" href=\"${p.links.live}\" aria-label=\"Live demo for ${p.title}\">${eyeIcon}</a>\n        </div>\n      </div>\n    </li>`).join('');
}

// After swapping layouts: certificates now use the project card grid style (div.projects-grid > div.project-card)
function populateCertificates() {
  const certs = [
    { name: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', year: 2024, links: { verify: '#'} },
    { name: 'Google UX Design', org: 'Coursera', year: 2023, links: { verify: '#'} },
    { name: 'Professional Scrum Master I', org: 'Scrum.org', year: 2023, links: { verify: '#'} },
    { name: 'Frontend Developer Certification', org: 'FreeCodeCamp', year: 2022, links: { verify: '#'} },
    { name: 'Frontend Developer Certification', org: 'FreeCodeCamp', year: 2022, links: { verify: '#'} },
    { name: 'Frontend Developer Certification', org: 'FreeCodeCamp', year: 2022, links: { verify: '#'} }
  ];
  const grid = document.querySelector('#panel-certificates .projects-grid');
  if (!grid) return;
  const eyeIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z"/><circle cx="12" cy="12" r="3"/></svg>';
  grid.innerHTML = certs.map(c => `\n    <div class=\"project-card fade-in\" tabindex=\"0\">\n      <h3>${c.name}</h3>\n      <p>${c.org} • ${c.year}</p>\n      <div class=\"project-links\">\n        <a class=\"icon-btn\" href=\"${c.links.verify}\" aria-label=\"Verify credential ${c.name}\">${eyeIcon}</a>\n      </div>\n    </div>`).join('');
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
    const errors = [];
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name) errors.push('Name required');
    if (!email) errors.push('Email required'); else if (!emailValid) errors.push('Email invalid');
    if (!message) errors.push('Message required');
    if (errors.length) {
      status.textContent = errors.join(' • ');
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

function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

function initFadeIns() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // respect reduced motion
  const els = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) {
        ent.target.classList.add('fade-in--visible');
        o.unobserve(ent.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => obs.observe(el));
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
  setYear();
  initTabs();
  initFadeIns();
}

document.addEventListener('DOMContentLoaded', init);
