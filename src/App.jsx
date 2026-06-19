import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import FeaturedProjects from './components/FeaturedProjects'
import OtherProjects from './components/OtherProjects'
import Experience from './components/Experience'
import Contact from './components/Contact'

const NAV_LINKS = [
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Experience', href: '#experience'  },
  { label: 'Contact',    href: '#contact'     },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-white/[0.08] py-3'
          : 'bg-transparent py-5'
        }
      `}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#home"
          className="font-display font-semibold text-base text-primary tracking-tight hover:text-cyan transition-colors duration-200"
        >
          KL<span className="text-cyan">.</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:your@email.com"
          className="
            hidden md:inline-flex items-center px-4 py-2
            text-sm font-medium rounded border border-cyan/40 text-cyan
            hover:bg-cyan/10 hover:border-cyan/70
            transition-colors duration-200
          "
        >
          聯絡我
        </a>
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <FeaturedProjects />
        <OtherProjects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
