# Personal Portfolio Starter

A dark, card‑style personal portfolio layout inspired by the provided reference. Tabs (About, Projects, Certificates, Contact) now appear in a horizontal top navigation bar; the left column contains your contact information with icon cards.

## Features
- Accessible tab navigation (arrow keys, Home/End, proper ARIA roles)
- Responsive layout (collapses sidebar on narrow screens)
- Theming via CSS custom properties (easily adjust colors & radii)
- Modular JS populates sample content (services, projects, certificates)
- Contact form with basic client-side validation (simulated submit)

## Structure
```
frontend/
  index.html        # Main file
  assets/
    css/style.css   # Styles (layout, components, dark theme)
  js/app.js       # Tab logic + sample data population (works with top nav)
backend/            # (Empty placeholder if you later add an API)
```

## Getting Started
Just open `frontend/index.html` in your browser. No build step required.

### Optional: Simple local server (recommended)
Using Python 3 (already on macOS):
```bash
cd frontend
python3 -m http.server 5173
```
Then visit: http://localhost:5173

Or using Node (if installed):
```bash
npx serve frontend
```

## Customization Guide
1. Open `index.html` and update the profile information in the sidebar.
2. Update the arrays in `assets/js/app.js` (`populateServices`, `populateProjects`, `populateCertificates`). Replace placeholder links with real URLs.
3. Adjust colors or spacing in `assets/css/style.css` (root CSS variables at the top).
4. Add real form handling: point the contact form to a service or add fetch logic in `handleContactForm`.
5. Add analytics or additional sections by duplicating a `<section>` block and adding a new tab button (remember ARIA attributes and `data-panel`).

## Accessibility Notes
- Tabs implement WAI-ARIA Authoring Practices (roving tabindex, arrow key navigation).
- High contrast accent color and focus outlines for keyboard users.
- Semantic elements (`nav`, `main`, `section`, `form`) for better screen reader parsing.

## Next Ideas
- Add light/dark theme switch.
- Integrate a blog (static markdown -> build step) later.
- Replace inline JS data with JSON fetched asynchronously.
- Add animation library (e.g., GSAP or Framer Motion via React) if you migrate frameworks.

## License
MIT – freely modify and deploy.
