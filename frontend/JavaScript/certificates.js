// Populate Certificates grid
export function populateCertificates() {
  const certs = [
    { name: 'Data Literacy', org: 'DataCamp', year: 2025, links: { verify: 'https://www.datacamp.com/skill-verification/DL0038489478465'} },
    { name: 'Python Data Associate', org: 'DataCamp', year: 2025, links: { verify: 'https://www.datacamp.com/certificate/PDA0014350360078'} },
    { name: 'AI Ethics/Fundamentals', org: 'DataCamp', year: 2025, links: { verify: 'https://www.datacamp.com/skill-verification/AIF0029317326889'} },
    { name: 'Artificial Intelligence Fundamentals', org: 'IBM SkillsBuilder', year: 2025, links: { verify: 'https://www.credly.com/badges/b7c12055-1033-4762-b908-5459f43d98d3'} },
    { name: 'Python Intermediate', org: 'Sololearn', year: 2024, links: { verify: 'https://drive.google.com/file/d/14Enwb4jlnr58zesPetPFX2YyslVoSFrf/view'} },
    { name: 'SQL Intermediate', org: 'Sololearn', year: 2024, links: { verify: 'https://drive.google.com/file/d/1-tZx0DsZEg46lXhkFRm9MURV1cjU3hL0/view?pli=1'} }
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
