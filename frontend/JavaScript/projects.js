// Populate Projects list
export function populateProjects() {
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
