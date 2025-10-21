// Populate Projects list
export function populateProjects() {
  const projects = [
    { title: 'Real-time Filipino Sign Language Recognition', desc: 'A machine learning architecture using deep learning techniques (Mask R-CNN) and recurrent neural network (LSTM)', links: { code: 'https://github.com/JasonIversooon/Real-time-FSL', live: 'https://github.com/JasonIversooon/Real-time-FSL/releases'} },
    { title: 'Chatbot', desc: 'A PyTorch-based intent-classification chatbot trained by using an artificial neural network (FFNN)', links: { code: 'https://github.com/felixgonzales01/WebChatbot-NLP_FNN_PyTorch'} },
    { title: 'InsightAI', desc: 'Users can upload datasets and chat with an AI to explore, analyze, and visualize data in real time', links: { code: 'https://github.com/JasonIversooon/InsightAI', live: 'https://insightai-frontend-759t.onrender.com' } },
    { title: 'AkademIQ Reviewer', desc: 'An AI-powered platform that turns documents into interactive study tools like flashcards, quizzes, and podcasts with text-to-speech', links: { code: 'https://github.com/JasonIversooon/AkademIQ-Reviewer', live: '#https://akademiq-reviewer-frontend.onrender.com/' } },
    { title: 'Selectra', desc: 'For browser AI extension tool that provides summarization, explanation, sentiment analysis, and source finding via right-click', links: { code: 'https://github.com/JasonIversooon/Selectra'} },
    { title: 'Portfolio', desc: 'A personal portfolio website to showcase projects, skills, experience, and contact information — designed to reflect your unique style and professional brand', links: { code: 'https://github.com/JasonIversooon/iBearson' } }
  ];
  const list = document.querySelector('#panel-projects .cert-list');
  if (!list) return;
  const eyeIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z"/><circle cx="12" cy="12" r="3"/></svg>';
  const gitHubIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.94c.58.1.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.3-1.69-1.3-1.69-1.07-.74.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.1-.76.41-1.28.74-1.57-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.76.11 3.05.75.81 1.2 1.85 1.2 3.11 0 4.43-2.7 5.41-5.28 5.69.42.36.79 1.07.79 2.17v3.22c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>';
  list.innerHTML = projects.map(p => {
    // Only show the live demo (eye) icon if a valid link exists and is not '#' or empty
    const hasLive = p.links && p.links.live && p.links.live !== '#';
  // Render description in normal case (not all caps)
  const desc = p.desc.charAt(0).toUpperCase() + p.desc.slice(1);
  // Open external links in a new tab and use noopener noreferrer for security
  const liveLink = hasLive ? `<a class=\"icon-btn\" href=\"${p.links.live}\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Live demo for ${p.title}\">${eyeIcon}</a>` : '';
  const codeLink = `<a class=\"icon-btn\" href=\"${p.links.code}\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"GitHub repository for ${p.title}\">${gitHubIcon}</a>`;
  return `\n    <li class=\"cert-item fade-in\" tabindex=\"0\">\n      <div class=\"cert-head\">\n        <div class=\"cert-meta\">\n          <h3>${p.title}</h3>\n          <span>${desc}</span>\n        </div>\n        <div class=\"cert-links\">\n          ${liveLink}\n          ${codeLink}\n        </div>\n      </div>\n    </li>`;
  }).join('');
}
