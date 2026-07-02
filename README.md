# Sharan Kumar K — Portfolio (React + Vite)

This is a React + Vite conversion of the original static HTML/CSS/JS portfolio.
All content, sections, links, and functionality have been preserved — only the
implementation changed (plain HTML/CSS/JS → React components).

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Adding your images and resume

The original project referenced images and a resume PDF that weren't part of
the files you uploaded, so this project points to the same paths but the
files themselves still need to be added:

- `public/images/profile.png`
- `public/images/ecommerce-project.png`
- `public/images/blockchain-project.png`
- `public/images/leetcode-grid.png`
- `public/resume/resume.pdf`

Anything placed in `public/` is served from the site root, so
`public/images/profile.png` becomes `/images/profile.png` — which is exactly
what `Hero.jsx` already references. Just drop your files into those folders
and everything will pick them up automatically.

## Project structure

```
src/
  assets/            # place any imported (bundled) images/icons here
  components/        # one folder per component, each with its own .jsx + .css
    Navbar/
    Hero/
    About/
    Skills/
    Projects/
    LeetCode/
    Achievements/
    Contact/
    Footer/
    ProjectCard/      # reusable card used inside Projects
    SkillCard/         # reusable card used inside Skills
    AchievementCard/   # reusable card used inside Achievements
    Button/            # reusable pill button/link
  data/               # all editable content lives here as plain arrays
  hooks/              # small reusable hooks (typing effect, scroll reveal, etc.)
  App.jsx
  main.jsx
  index.css           # global reset + shared design tokens (CSS variables)
```

## Editing content

You will almost never need to touch a component file to change content —
everything (nav links, social links, skills, projects, achievements, contact
info, the hero's typing words) lives in `src/data/*.js` as plain arrays.
Add, remove, or edit an object in the array and the UI updates automatically.

## How the original functionality was preserved

- **Typing effect** → `src/hooks/useTypingEffect.js`, driven by `src/data/typingWords.js`.
- **Mobile menu** → local `useState` inside `Navbar.jsx`.
- **Smooth scrolling** → still handled by CSS (`html { scroll-behavior: smooth }` in `index.css`), same as before.
- **Active nav link on scroll** → `src/hooks/useActiveSection.js` (IntersectionObserver, same approach as the original script.js).
- **Scroll reveal animation** → `src/hooks/useScrollReveal.js`, applied per-section, same `.hidden` / `.show` CSS classes as before.
- **Navbar background on scroll** → `src/hooks/useNavbarScroll.js`.

## Tech stack

- React 19 (functional components + hooks only)
- Vite
- Plain CSS (CSS variables for shared design tokens, one CSS file per component)
- Fonts: Outfit (display/headings) + Inter (body), loaded via Google Fonts in `index.html`
- Font Awesome (loaded via CDN in `index.html`)

## Design system

This version uses a dark glassmorphism aesthetic:
- Animated blurred gradient orbs in the background (`.bg-orb` in `App.jsx`)
- `.glass-card` — the shared frosted-glass card style used by skill cards, about cards,
  project cards, the LeetCode box, achievement cards, and contact cards
- `.gradient-text` — white-to-cyan gradient text treatment used on key headings
- Alternating left/right layout for project cards (`isAlt` prop on `ProjectCard`)
- Cinematic scroll-reveal (`.hidden` / `.hidden.show` in `index.css`) with a blur-in effect,
  driven by `useScrollReveal`

All of this lives in `index.css` (shared tokens/utilities) plus each component's own `.css`
file — nothing is duplicated across files.
