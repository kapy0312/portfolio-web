import { useInView } from '../hooks/useInView'

/**
 * @param {string}  label    - small eyebrow label above title
 * @param {string}  title    - main section title
 * @param {string}  [align]  - 'left' | 'center' (default 'left')
 */
export default function SectionTitle({ label, title, align = 'left' }) {
  const [ref, inView] = useInView()
  const centered = align === 'center'

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${centered ? 'text-center items-center' : ''} flex flex-col gap-3 mb-14`}
    >
      {label && (
        <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-cyan">
          {label}
        </span>
      )}
      <h2
        className="font-display font-semibold text-3xl md:text-4xl text-primary leading-tight"
      >
        {title}
      </h2>
      <div className={`section-divider ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
