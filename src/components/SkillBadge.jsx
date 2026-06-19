/**
 * @param {string}  name    - Skill label
 * @param {'ot'|'it'|'default'} [variant] - controls accent color hint
 */
export default function SkillBadge({ name, variant = 'default' }) {
  const styles = {
    ot: 'border-amber/25 text-amber/80 bg-amber/[0.05]',
    it: 'border-cyan/25 text-cyan/80 bg-cyan/[0.05]',
    default: 'border-white/[0.12] text-muted bg-white/[0.03]',
  }

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1
        text-xs font-mono font-medium
        rounded border
        transition-colors duration-200
        ${styles[variant] ?? styles.default}
      `}
    >
      {name}
    </span>
  )
}
