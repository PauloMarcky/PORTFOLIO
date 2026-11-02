import { useEffect, useState } from 'react'

// Each link points to a section's `id` on the page. Order matches the page order.
const links = [
  { id: 'home',     label: 'Home',     icon: 'icons8-home-24.png' },
  { id: 'about',    label: 'About me', icon: 'icons8-about-me-50.png' },
  { id: 'projects', label: 'Projects', icon: 'icons8-project-48.png' },
  { id: 'contact',  label: 'Contacts', icon: 'icons8-contact-30.png' },
]

export default function SideNav() {
  // SCROLL SPY: remember which section is currently in view so we can highlight it.
  const [active, setActive] = useState('home')

  useEffect(() => {
    // The observer fires when a section crosses a thin band near the middle of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect() // cleanup when the component unmounts
  }, [])

  return (
    <nav className="side-nav-pill">
      {links.map((link) => (
        // A normal anchor jumps to the section; CSS `scroll-behavior: smooth` animates it.
        <a
          key={link.id}
          href={`#${link.id}`}
          className={active === link.id ? 'nav-item active' : 'nav-item'}
        >
          <span className="nav-btn">
            <img src={`/images/${link.icon}`} alt={link.label} />
          </span>
          <p>{link.label}</p>
        </a>
      ))}
    </nav>
  )
}
