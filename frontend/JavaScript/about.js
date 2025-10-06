// Populate About/services cards
export function populateServices() {
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
