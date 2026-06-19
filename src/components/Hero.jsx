import { useEffect, useState } from 'react'

const GITHUB_URL = 'https://github.com/kapy0312'
const PROJECTS_ANCHOR = '#projects'

function ArrowDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger entrance animation after mount
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid-bg pointer-events-none" />

      {/* Subtle radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 50% 50%, transparent 30%, #0A0F1A 100%)',
        }}
      />

      {/* Pulse rings — decorative, behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="pulse-ring w-[480px] h-[480px] rounded-full border border-cyan/[0.06]"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        />
        <div
          className="pulse-ring pulse-ring-2 w-[700px] h-[700px] rounded-full border border-cyan/[0.03]"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <div
          className={`
            font-mono text-xs tracking-[0.25em] uppercase text-cyan mb-8
            transition-all duration-700 ease-out
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          Industrial × Digital
        </div>

        {/* Primary headline */}
        <h1
          className={`
            font-display font-bold leading-[1.05] tracking-tight
            transition-all duration-700 ease-out delay-100
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {/* Line 1 */}
          <span className="block text-5xl md:text-7xl lg:text-8xl text-primary">
            CIM 工程師
          </span>

          {/* Separator */}
          <span
            className="block my-2 text-4xl md:text-5xl lg:text-6xl text-cyan glow-text select-none"
            aria-hidden="true"
          >
            ×
          </span>

          {/* Line 2 */}
          <span className="block text-5xl md:text-7xl lg:text-8xl text-primary">
            工業 AI 全端開發
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`
            mt-8 max-w-xl text-base md:text-lg text-muted font-body leading-relaxed
            transition-all duration-700 ease-out delay-200
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          從 Siemens PLC 邏輯到 FastAPI 微服務，從 CNC 協調控制到 LLM AI 診斷——
          跨越 OT／IT 邊界，讓工廠數據真正流動起來。
        </p>

        {/* CTA buttons */}
        <div
          className={`
            mt-10 flex flex-wrap items-center justify-center gap-4
            transition-all duration-700 ease-out delay-300
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-6 py-3
              rounded border border-cyan/50 text-cyan
              font-medium text-sm
              hover:bg-cyan/10 hover:border-cyan/80
              transition-colors duration-200
            "
          >
            <GitHubIcon />
            GitHub
          </a>

          <a
            href={PROJECTS_ANCHOR}
            className="
              inline-flex items-center gap-2 px-6 py-3
              rounded border border-white/15 text-primary
              font-medium text-sm
              hover:border-white/35 hover:bg-white/[0.04]
              transition-colors duration-200
            "
          >
            查看作品集
            <ArrowDown />
          </a>
        </div>

        {/* Tech strip — small floating tags below CTA */}
        <div
          className={`
            mt-12 flex flex-wrap justify-center gap-2
            transition-all duration-700 ease-out delay-[400ms]
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}
        >
          {[
            'SINUMERIK ONE', 'OPC-UA', 'TIA Portal',
            'FastAPI', 'React', 'TimescaleDB', 'Ollama'
          ].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-mono text-dim border border-white/[0.07] rounded bg-white/[0.02]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`
          absolute bottom-10 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2
          transition-all duration-700 ease-out delay-500
          ${mounted ? 'opacity-40' : 'opacity-0'}
        `}
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted/60 to-transparent" />
      </div>
    </section>
  )
}
