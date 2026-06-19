import { useInView } from '../hooks/useInView'
import SkillBadge from './SkillBadge'

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

/**
 * LinkButton — renders disabled with tooltip if url is falsy
 */
function LinkButton({ url, label, icon, tooltip }) {
  const disabled = !url
  if (disabled) {
    return (
      <span
        title={tooltip}
        className="
          relative inline-flex items-center gap-1.5 px-3.5 py-1.5
          text-xs font-medium rounded border
          border-white/[0.08] text-dim
          cursor-not-allowed select-none
          group
        "
      >
        {icon}
        {label}
        {tooltip && (
          <span className="
            absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1
            text-[10px] font-mono whitespace-nowrap
            bg-surface-hi border border-white/[0.12] text-muted rounded
            opacity-0 group-hover:opacity-100
            pointer-events-none transition-opacity duration-150
          ">
            {tooltip}
          </span>
        )}
      </span>
    )
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-1.5 px-3.5 py-1.5
        text-xs font-medium rounded border
        border-cyan/30 text-cyan
        hover:bg-cyan/10 hover:border-cyan/60
        transition-colors duration-200
      "
    >
      {icon}
      {label}
    </a>
  )
}

/* ─── Featured Card (large) ─────────────────────────────────────────────────── */
function FeaturedCard({ project, delay }) {
  const [ref, inView] = useInView()

  return (
    <article
      ref={ref}
      className={`
        reveal ${inView ? 'in-view' : ''}
        project-card relative rounded-xl overflow-hidden
        bg-surface flex flex-col
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* 16:9 image / video placeholder */}
      <div className="relative w-full aspect-video bg-surface-hi border-b border-white/[0.08] flex items-center justify-center group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/[0.04] to-transparent" />
        {project.mediaUrl ? (
          project.mediaType === 'video' ? (
            <iframe
              src={project.mediaUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={project.title}
            />
          ) : (
            <img src={project.mediaUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
          )
        ) : (
          /* placeholder */
          <div className="flex flex-col items-center gap-3 text-dim">
            <div className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center">
              <PlayIcon />
            </div>
            <span className="text-xs font-mono tracking-wider">
              {project.mediaNote ?? 'SCREENSHOT / DEMO'}
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          {project.nda && (
            <span className="inline-block mb-2 text-[10px] font-mono tracking-[0.15em] uppercase px-2 py-0.5 rounded border border-amber/30 text-amber/70">
              NDA · 架構說明
            </span>
          )}
          <h3 className="font-display font-semibold text-xl text-primary leading-snug mb-1.5">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{project.highlight}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <SkillBadge key={t} name={t} variant="it" />
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 flex-wrap mt-auto pt-2">
          <LinkButton
            url={project.github}
            label="GitHub"
            icon={<GitHubIcon />}
            tooltip={project.githubNote}
          />
          <LinkButton
            url={project.demo}
            label="Demo"
            icon={<ExternalLinkIcon />}
            tooltip={project.demoNote}
          />
        </div>
      </div>
    </article>
  )
}

/* ─── Small Card ─────────────────────────────────────────────────────────────── */
function SmallCard({ project, delay }) {
  const [ref, inView] = useInView()

  return (
    <article
      ref={ref}
      className={`
        reveal ${inView ? 'in-view' : ''}
        project-card relative rounded-lg
        bg-surface p-5 flex flex-col gap-3
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div>
        <h3 className="font-display font-semibold text-base text-primary leading-snug mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-muted leading-relaxed">{project.highlight}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((t) => (
          <SkillBadge key={t} name={t} variant="default" />
        ))}
      </div>

      <div className="flex gap-2 flex-wrap mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-cyan/70 hover:text-cyan transition-colors duration-150"
          >
            <GitHubIcon /> GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-cyan/70 hover:text-cyan transition-colors duration-150"
          >
            <ExternalLinkIcon /> Demo
          </a>
        )}
      </div>
    </article>
  )
}

/* ─── Public API ─────────────────────────────────────────────────────────────── */
/**
 * @param {'featured'|'small'} variant
 * @param {object} project
 * @param {number} [delay] - ms transition-delay for stagger
 */
export default function ProjectCard({ variant = 'small', project, delay = 0 }) {
  return variant === 'featured'
    ? <FeaturedCard project={project} delay={delay} />
    : <SmallCard    project={project} delay={delay} />
}
