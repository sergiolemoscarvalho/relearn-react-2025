# Copilot Instructions for AI Agents

## Project Overview
- **Framework:** React 19 + Vite (see `vite.config.js`)
- **Entry Point:** `src/main.jsx` renders the `Header` component into `#root` in `index.html`.
- **UI Structure:** Main components are in `src/` (e.g., `header.jsx`). Older/experimental code is in `src/reference_older/`.
- **Styling:**
  - Main styles: `src/css/style.scss` (compiled to `style.css`), plus modular SCSS partials (e.g., `_backgrounds.scss`, `_buttons.scss`).
  - FontAwesome and custom fonts in `src/fonts-6/`.
  - Images in `src/images/`.
- **Assets:** Use relative imports for images/fonts in React components and SCSS.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (runs Vite with HMR)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint with custom config in `eslint.config.js`)
- **No built-in test scripts** (add as needed).

## Conventions & Patterns
- **Component Imports:** Use default exports for components (e.g., `export default function Header`).
- **CSS/SCSS:**
  - Use SCSS partials for modularity. Import main SCSS in `main.jsx`.
  - Use BEM-like class naming for custom styles (e.g., `bg--header`, `bt--leiamais`).
  - FontAwesome icons are available via CSS classes (see `fonts-6/css/`).
- **Legacy/Reference Code:**
  - `src/reference_older/` contains previous versions and experiments. Do not update unless porting features.
- **Images:**
  - Place new images in `src/images/` and reference with relative paths in components/SCSS.

## Integration & Dependencies
- **React 19** and **ReactDOM** are primary dependencies.
- **Vite** handles dev/build tooling.
- **ESLint** is configured for React and Vite (see `eslint.config.js`).
- **No TypeScript** by default; see README for upgrade instructions.

## Examples
- To add a new component:
  1. Create `src/MyComponent.jsx` with a default export.
  2. Import and use in `main.jsx` or another component.
- To add a new style:
  1. Create a new SCSS partial in `src/css/` (e.g., `_newfeature.scss`).
  2. Import it in `src/css/style.scss`.

## Key Files & Directories
- `src/main.jsx` – App entry point
- `src/header.jsx` – Main header component
- `src/css/` – All SCSS/CSS
- `src/fonts-6/` – FontAwesome and custom fonts
- `src/images/` – Images and icons
- `vite.config.js` – Vite config
- `eslint.config.js` – ESLint config
- `package.json` – Scripts and dependencies

---

**For more details, see `README.md`. If you add new workflows or conventions, update this file.**
