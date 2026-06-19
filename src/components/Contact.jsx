import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'your@email.com',       // ← 替換為真實 email
    href: 'mailto:your@email.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: '104 履歷',
    value: '查看線上履歷',
    href: 'https://www.104.com.tw/',  // ← 替換為真實 104 連結
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5Z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'kapy0312',
    href: 'https://github.com/kapy0312',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="py-24 bg-bg">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <SectionTitle label="Get in Touch" title="聯絡我" align="center" />

        <p
          className={`reveal ${inView ? 'in-view' : ''} text-muted text-base leading-relaxed mb-14`}
          ref={ref}
        >
          對 OT/IT 整合、工業 AI 或全端開發有任何想法？歡迎直接聯繫。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CONTACT_LINKS.map((link, i) => (
            <ContactCard key={link.label} link={link} delay={i * 80} />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-16 text-xs font-mono text-dim tracking-wider">
          Built with React + Vite + Tailwind CSS v4
          <span className="mx-2 text-white/20">·</span>
          <span className="text-cyan/50">Kevin Lai</span>
          <span className="mx-2 text-white/20">·</span>
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}

function ContactCard({ link, delay }) {
  const [ref, inView] = useInView()

  return (
    <a
      ref={ref}
      href={link.href}
      target={link.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className={`
        reveal ${inView ? 'in-view' : ''}
        project-card relative rounded-xl bg-surface p-6
        flex flex-col items-center gap-3 group
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-muted group-hover:text-cyan transition-colors duration-200">
        {link.icon}
      </span>
      <div className="text-center">
        <p className="text-xs font-mono text-dim mb-0.5">{link.label}</p>
        <p className="text-sm text-primary group-hover:text-cyan transition-colors duration-200">
          {link.value}
        </p>
      </div>
    </a>
  )
}
