# Portfolio (React) — single scrolling page

## Run it
1. Copy your original `images/` files into `public/images/`
2. `npm install`
3. `npm run dev`  → open the link it prints (usually http://localhost:5173)

## How the one-page layout works
| Piece                         | What it does                                                        |
|-------------------------------|---------------------------------------------------------------------|
| `App.jsx`                     | Stacks `Home`, `About`, `Projects`, `Contact` one after another     |
| `src/sections/*.jsx`          | Each section has an `id` (`home`, `about`, `projects`, `contact`)   |
| `SideNav.jsx`                 | Anchor links (`#about`, ...) + scroll spy that highlights the section in view |
| `layout.css`                  | `scroll-behavior: smooth` for animated jumps; fixed header/side nav |
| `ProjectCard` + `data/projects.js` | Props + data: add a project by adding an object                |
| `useState` in `Contact.jsx`   | Controlled form inputs                                              |

There is no router anymore, so `react-router-dom` was removed.

## Learning path
1. Change your name in `sections/Home.jsx`, save, and watch the browser update.
2. Add a 7th project in `data/projects.js` (no JSX needed).
3. Add a "Resume" section: new file in `sections/`, add it in `App.jsx`, and add an entry to `links` in `SideNav.jsx`.
4. Make the Contact form really send: try Formspree or EmailJS.
5. Look up `useEffect`, then fetch your GitHub repos from the GitHub API.

## Deploying to GitHub Pages
Set `base: '/your-repo-name/'` in `vite.config.js`. Since there is no router now, refreshing the page works without any `HashRouter` workaround.
