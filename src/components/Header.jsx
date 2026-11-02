import NavLinks from './NavLinks.jsx'

// Clicking the logo scrolls back to the top (the #home section).
// The links on the right jump to each section (see NavLinks.jsx).
export default function Header() {
  return (
    <header className="top-header">
      <a className="logo-text" href="#home">MKY.DEV</a>
      <NavLinks />
    </header>
  )
}
