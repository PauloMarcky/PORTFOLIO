# Portfolio (React)

## Run it
1. Copy your original `images/` files into `public/images/`
2. `npm install`
3. `npm run dev`  → open the link it prints (usually http://localhost:5173)

## Where things went
| Old (HTML)                         | New (React)                          | Concept            |
|------------------------------------|--------------------------------------|--------------------|
| 4 separate .html files             | `src/pages/*.jsx` + `App.jsx` routes | components, routing|
| Header/nav copy-pasted 4 times     | `Layout`, `Header`, `SideNav`        | reusable components|
| 4 hand-written nav blocks          | `links` array + `.map()`             | rendering lists    |
| `.nav-btn-active` per page         | `NavLink` `isActive`                 | automatic state    |
| 6 copy-pasted project cards        | `ProjectCard` + `data/projects.js`   | props, data        |
| Inputs with no behavior            | `useState` in `Contact.jsx`          | state, events      |

## Learning path (do these in order)
1. Change your name in `Home.jsx`, save, and watch the browser update.
2. Add a 7th project in `data/projects.js` (no JSX needed).
3. Add a "Resume" link to `SideNav.jsx` + a new page + a `<Route>`.
4. Add a click counter button with `useState` to understand re-rendering.
5. Make the Contact form really send: try Formspree or EmailJS.
6. Look up `useEffect`, then fetch your GitHub repos from the GitHub API
   to build the project list automatically.

## Deploying to GitHub Pages
`BrowserRouter` breaks on GitHub Pages refresh. Swap it for `HashRouter`
in `main.jsx`, and set `base: '/your-repo-name/'` in `vite.config.js`.
