// Populate Experience grid with clickable cards linking to company sites
export function populateExperience(){
  const experiences = [
    { role: 'Senior Web Developer — Acme Corp', meta: 'Jan 2020 — Present • Remote', desc: 'Worked on building accessible, high-performance web applications, implementing CI pipelines, and integrating REST/GraphQL APIs.', link: 'https://www.example-acme.com' },
    { role: 'Frontend Engineer — Example Inc', meta: 'Jun 2017 — Dec 2019 • New York, NY', desc: 'Built component libraries, designed accessible UI patterns, and led frontend performance initiatives.', link: 'https://www.example-inc.com' }
  ];

  const panel = document.getElementById('panel-experience');
  if (!panel) return;

  // Clear existing content and render as anchor-wrapped cards (keeps accessibility)
  panel.innerHTML = '<h2 class="sr-only">Experience</h2>' + experiences.map(exp => `\n    <a class="experience-card fade-in" href="${exp.link}" target="_blank" rel="noopener noreferrer">\n      <h3 class="experience-role">${exp.role}</h3>\n      <p class="experience-meta">${exp.meta}</p>\n      <p>${exp.desc}</p>\n    </a>`).join('');
}
