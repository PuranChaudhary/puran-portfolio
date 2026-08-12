# Puran Chaudhary — Portfolio

A modern, dark-themed developer portfolio built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
puran-portfolio/
├── public/
│   ├── Puran-Chaudhary-CV.pdf   ← replace with your real CV
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Reveal.jsx        ← scroll-reveal animation wrapper
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Things to personalize

- **CV**: replace `public/Puran-Chaudhary-CV.pdf` with your actual CV (placeholder included).
- **Social links**: update the GitHub/LinkedIn URLs in `Hero.jsx`, `Projects.jsx`, and `Footer.jsx`.
- **Project links**: swap the placeholder GitHub/demo URLs in `Projects.jsx` for real ones.
- **Contact form**: currently shows a success message without a backend. Connect it to
  a service like EmailJS, Formspree, or your own API endpoint inside `Contact.jsx`'s
  `handleSubmit` function if you want real email delivery.

## Tech stack

React 18 · Vite 5 · lucide-react icons · plain CSS (no framework)
