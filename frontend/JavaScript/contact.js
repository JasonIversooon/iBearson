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
    // Build a mailto: link so the user's email client is opened with the message prefilled.
    const to = 'jasooon.iv@gmail.com';
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    status.textContent = 'Opening email client...';
    status.style.color = 'var(--color-text-soft)';
    // Open the mail client in a new window/tab so the portfolio remains visible
    try {
      window.open(mailto);
      setTimeout(() => {
        status.textContent = 'Email client opened. Please send the message from your email app.';
        status.style.color = 'var(--color-text-soft)';
        form.reset();
      }, 900);
    } catch (err) {
      status.textContent = 'Unable to open email client. Please email jasooon.iv@gmail.com directly.';
      status.style.color = 'var(--color-accent)';
    }
  });
}

// Make contact sidebar items act like clickable cards when they contain a link.
export function initContactItems() {
  const items = Array.from(document.querySelectorAll('.contact-item'));
  if (!items.length) return;

  items.forEach(item => {
    // find a focusable link inside the item
    const link = item.querySelector('a[href]');
    if (!link) return; // leave non-links alone (e.g., location text)

    // mark as interactive and make keyboard-focusable
    item.classList.add('clickable');
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'link');

    // click anywhere on the item activates the link
    item.addEventListener('click', (e) => {
      // avoid double-activating if the click was on the inner link itself
      if (e.target.closest('a')) return;
      // preserve normal link behavior (open mailto/tel in same way)
      link.click();
    });

    // support keyboard activation: Enter or Space
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  });
}
