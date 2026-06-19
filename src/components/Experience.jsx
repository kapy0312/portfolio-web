import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'

const EXPERIENCES = [
  {
    period: '2022 — 現在',
    role: 'CIM / 工業 AI 工程師',
    company: '製造業（台中）',
    desc: '負責多站 CNC 拋光系統 PLC / HMI 開發（SINUMERIK ONE + TIA Portal），同時主導 IIoT SCADA 平台全端建置，整合 OPC-UA、SLMP、TimescaleDB 與 Ollama AI 診斷。',
    tags: ['SINUMERIK ONE', 'TIA Portal', 'OPC-UA', 'FastAPI', 'React'],
  },
  {
    period: '20XX — 20XX',
    role: '職位名稱',
    company: '公司名稱（預留）',
    desc: '工作內容描述——此為預留位置，依實際經歷填入。',
    tags: [],
  },
  {
    period: '20XX — 20XX',
    role: '職位名稱',
    company: '公司名稱（預留）',
    desc: '工作內容描述——此為預留位置，依實際經歷填入。',
    tags: [],
  },
]

function TimelineItem({ exp, isLast, delay }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} flex gap-6`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Left: dot + line */}
      <div className="flex flex-col items-center flex-shrink-0 w-4">
        <div className="w-3 h-3 rounded-full bg-cyan/80 border border-cyan/40 shadow-[0_0_8px_rgba(0,212,255,0.4)] flex-shrink-0 mt-1" />
        {!isLast && <div className="timeline-line w-px flex-1 mt-2 min-h-[60px]" />}
      </div>

      {/* Right: content */}
      <div className="pb-10">
        <span className="text-xs font-mono text-dim">{exp.period}</span>
        <h3 className="font-display font-semibold text-primary text-lg mt-1 leading-snug">
          {exp.role}
        </h3>
        <p className="text-sm text-cyan/70 mb-3">{exp.company}</p>
        <p className="text-sm text-muted leading-relaxed max-w-xl">{exp.desc}</p>
        {exp.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {exp.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 text-[11px] font-mono border border-white/[0.1] text-dim rounded"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle label="Career" title="工作經歷" />

        <div>
          {EXPERIENCES.map((exp, i) => (
            <TimelineItem
              key={i}
              exp={exp}
              isLast={i === EXPERIENCES.length - 1}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
