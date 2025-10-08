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

  // Left: education timeline card (single card with vertical yellow timeline)
  // Right: four cards matching certificate/project card styles placed inside a scrollable column
  const educationHtml = `
    <div class="about-edu card">
      <header class="edu-header">
        <h3 class="edu-school">Technological Institute of the Philippines</h3>
      </header>
      <ul class="about-cert-list" aria-label="Education list">
        <li class="cert-item edu-interactive" tabindex="0">
          <div class="cert-head">
            <div class="cert-meta">
              <h3>College</h3>
              <span>Bachelor of Science — Computer Science</span>
            </div>
          </div>
          <div class="cert-links"><time>2020 — 2024</time></div>
        </li>
        <li class="cert-item edu-interactive" tabindex="0">
          <div class="cert-head">
            <div class="cert-meta">
              <h3>Senior High School</h3>
              <span>STEM Track</span>
            </div>
          </div>
          <div class="cert-links"><time>2018 — 2020</time></div>
        </li>
      </ul>
    </div>`;

  const rightCards = services.slice(0,4).map((s, idx) => `
    <li class="cert-item fade-in" tabindex="0">
      <div class="cert-head">
        <div class="cert-meta">
          <h3>${s.title}</h3>
          <span>${s.body}</span>
        </div>
      </div>
    </li>
  `).join('');

  const rightHtml = `
    <div class="about-right card">
      <ul class="cert-list about-cert-list" aria-label="Skills and services">
        ${rightCards}
      </ul>
    </div>`;

  // Compose two-column layout
  wrap.innerHTML = `
    <div class="about-two-col">
      <div class="about-left">${educationHtml}</div>
      <div class="about-right-wrap">${rightHtml}</div>
    </div>
  `;
}
