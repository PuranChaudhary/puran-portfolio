import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => handleNavClick('home')} aria-label="Go to home section">
          <span className="navbar__logo-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="navbar__logo-text">
            Puran<span className="navbar__logo-accent">.</span>
          </span>
        </button>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {NAV_LINKS.map((link, index) => (
            <button
              key={link.id}
              className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              <span className="navbar__link-index">{String(index + 1).padStart(2, '0')}</span>
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav className={`navbar__links navbar__links--mobile ${isOpen ? 'navbar__links--mobile-open' : ''}`} aria-label="Mobile">
        {NAV_LINKS.map((link, index) => (
          <button
            key={link.id}
            className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
            onClick={() => handleNavClick(link.id)}
          >
            <span className="navbar__link-index">{String(index + 1).padStart(2, '0')}</span>
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
