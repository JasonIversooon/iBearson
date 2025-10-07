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
      <div class="edu-school">Technological Institute of the Philippines</div>
      <div class="edu-timeline">
        <div class="edu-item">
          <div class="edu-dot" aria-hidden="true"></div>
          <div class="edu-content">
            <strong>College</strong>
            <div class="edu-meta">Bachelor of Science — Computer Science</div>
            <div class="edu-year">2020 — 2024</div>
          </div>
        </div>
        <div class="edu-item">
          <div class="edu-dot" aria-hidden="true"></div>
          <div class="edu-content">
            <strong>Senior High School</strong>
            <div class="edu-meta">STEM Track</div>
            <div class="edu-year">2018 — 2020</div>
          </div>
        </div>
      </div>
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
