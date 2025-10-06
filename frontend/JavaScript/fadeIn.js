// IntersectionObserver fade-in effect
export function initFadeIns() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // respect reduced motion
  const els = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) {
        ent.target.classList.add('fade-in--visible');
        o.unobserve(ent.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => obs.observe(el));
}
