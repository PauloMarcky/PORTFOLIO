import { useEffect, useState } from 'react'

// Each link points to a section's `id` on the page. Order matches the page order.
const links = [
  { id: 'home',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact' },
]

export default function NavLinks() {
  // SCROLL SPY: remember which section is in view so its link can be highlighted.
  const [active, setActive] = useState('home')
  // On small screens the links hide behind a hamburger button.
  const [open, setOpen] = useState(false)

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
    <>
      <button
        className="nav-toggle"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? '✕' : '☰'}
      </button>

      <nav className={open ? 'top-nav open' : 'top-nav'}>
        {links.map((link) => {
          let className = 'nav-link'
          if (link.id === 'contact') className += ' nav-cta'
          if (active === link.id) className += ' active'
          return (
            // A normal anchor jumps to the section; CSS `scroll-behavior: smooth` animates it.
            <a key={link.id} className={className} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          )
        })}
      </nav>
    </>
  )
}