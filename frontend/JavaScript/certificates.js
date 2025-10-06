// Populate Certificates grid
export function populateCertificates() {
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
      // Render each certificate as a clickable card (anchor) — removes separate eye icon
      grid.innerHTML = certs.map(c => `
      <a class="project-card fade-in" href="${c.links.verify}" target="_blank" rel="noopener noreferrer">
        <h3>${c.name}</h3>
        <p>${c.org} • ${c.year}</p>
      </a>`).join('');
}
