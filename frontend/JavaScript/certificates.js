// Populate Certificates grid
export function populateCertificates() {
  const certs = [
    { name: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', year: 2024, links: { verify: '#'} },
    { name: 'Google UX Design', org: 'Coursera', year: 2023, links: { verify: '#'} },
    { name: 'Professional Scrum Master I', org: 'Scrum.org', year: 2023, links: { verify: '#'} },
      { name: 'Frontend Developer Certification', org: 'FreeCodeCamp', year: 2022, links: { verify: '#'} }
  ];
  const grid = document.querySelector('#panel-certificates .projects-grid');
  if (!grid) return;
  const eyeIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z"/><circle cx="12" cy="12" r="3"/></svg>';
      // Render each certificate as a clickable card (anchor) — removes separate eye icon
      grid.innerHTML = certs.map(c => `
      <a class="project-card fade-in" href="${c.links.verify}" target="_blank" rel="noopener noreferrer">
        <h3>${c.name}</h3>
        <p>${c.org} • ${c.year}</p>
      </a>`).join('');
}
