import { NavLink } from 'react-router-dom'

// DATA instead of repetition: 4 copy-pasted blocks become one array + .map()
const links = [
  { to: '/',         label: 'Home',     icon: 'icons8-home-24.png' },
  { to: '/about',    label: 'About me', icon: 'icons8-about-me-50.png' },
  { to: '/contact',  label: 'Contacts', icon: 'icons8-contact-30.png' },
  { to: '/projects', label: 'Projects', icon: 'icons8-project-48.png' },
]

export default function SideNav() {
  return (
    <nav className="side-nav-pill">
      {links.map((link) => (
        // `key` helps React track list items. Use something unique.
        // NavLink gives us `isActive` automatically, replacing your
        // hand-written .nav-btn-active / .btn-active-home classes.
        <NavLink
          key={link.to}
          to={link.to}
          end
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          <span className="nav-btn">
            <img src={`/images/${link.icon}`} alt={link.label} />
          </span>
          <p>{link.label}</p>
        </NavLink>
      ))}
    </nav>
  )
}
