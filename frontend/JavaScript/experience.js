// Populate Experience grid with clickable cards linking to company sites
export function populateExperience(){
  const experiences = [
    {
      role: '<b>Junior Python Engineer</b> — NTEK Systems Inc.',
      meta: 'Oct 2024 — Present • Onsite',
      desc: `<ul class="lead">
        <li>Engineered and deployed AI-powered projects, including RAG-based chatbots, text-to-motion, and text-to-speech.</li>
        <li>Collaborated with cross-functional teams to build scalable backend systems and databases.</li>
        <li>Automated workflows by combining AI inference, APIs, and backend orchestration.</li>
        <li>Integrated AI/ML models through APIs to support real-world applications.</li>
        <li>Performed data cleansing, preprocessing, and optimization.</li>
      </ul>`,
      link: null
    },
    {
      role: '<b>Backend Developer</b> — Solutions Resource',
      meta: 'March 2024 - May 2024 • Hybrid',
      desc: `<ul class="lead">
        <li>Contributed to the design and implementation of backend services for web applications and automation tools.</li>
        <li>Helped build scalable APIs and optimize system performance.</li>
        <li>Integrated AI models and data processing pipelines.</li>
      </ul>`,
      link: null
    }
  ];

  const panel = document.getElementById('panel-experience');
  if (!panel) return;

  // Clear existing content and render as articles (no links, matches new experience format)
  panel.innerHTML = '<h2 class="sr-only">Experience</h2>' + experiences.map(exp => `\n    <article class="experience-item fade-in">\n      <h3 class="experience-role">${exp.role}</h3>\n      <p class="experience-meta">${exp.meta}</p>\n      ${exp.desc}\n    </article>`).join('');
}
