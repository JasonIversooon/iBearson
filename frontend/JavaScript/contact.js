// Contact form validation & simulated submission
export function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const errors = [];
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name) errors.push('Name required');
    if (!email) errors.push('Email required'); else if (!emailValid) errors.push('Email invalid');
    if (!message) errors.push('Message required');
    if (errors.length) {
      status.textContent = errors.join(' • ');
      status.style.color = 'var(--color-accent)';
      return;
    }
    status.textContent = 'Sending...';
    setTimeout(() => {
      status.textContent = 'Message sent! (Simulated)';
      status.style.color = 'var(--color-text-soft)';
      form.reset();
    }, 900);
  });
}
