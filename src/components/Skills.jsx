import { useInView } from "../hooks/useInView";
import SectionTitle from "./SectionTitle";
import SkillBadge from "./SkillBadge";

const OT_SKILLS = [
  { name: 'Siemens SINUMERIK ONE', note: '生產環境' },
  { name: 'TIA Portal SCL / LAD',  note: '生產環境' },
  { name: 'OPC-UA',                note: '生產環境' },
  { name: 'SINAMICS S120 / G120',  note: '業界講師認證' },
  { name: 'Mitsubishi iQ-R / FX5U', note: null },
  { name: 'SLMP / Modbus RTU',     note: null },
]

const IT_SKILLS = [
  { name: "Python", note: null },
  { name: "FastAPI", note: null },
  { name: "React / Vite", note: "商業專案" },
  { name: "Electron", note: "商業專案" },
  { name: "Node.js", note: null },
  { name: "Docker", note: null },
  { name: "TimescaleDB", note: null },
  { name: "Machine Learning", note: null },
];

const OT_TAGS = ['CNC', 'PLC', 'HMI', 'SCADA', 'Beckhoff', 'MR-J4', 'ET200SP', 'Fieldbus']
const IT_TAGS = ["LLM", "RAG", "CI/CD", "SQLite", "WebSocket", "SSE"];

const WORKFLOW = [
  {
    name: "AI 協作開發",
    desc: "以 Claude / GPT 為開發搭檔，負責架構決策與品質審查",
  },
  { name: "GitHub Actions", desc: "多平台 CI/CD 自動建置與發布" },
  { name: "Docker Compose", desc: "本地開發與生產環境容器化" },
  { name: "Conda / venv", desc: "Python 多環境隔離管理" },
];

function SkillItem({ name, note, variant, delay }) {
  const [ref, inView] = useInView(0.1);
  const accent = variant === "ot" ? "text-amber/70" : "text-cyan/70";
  return (
    <div
      ref={ref}
      className={`reveal ${
        inView ? "in-view" : ""
      } flex items-center justify-between py-2 border-b border-white/[0.06]`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-sm text-primary">{name}</span>
      {note && (
        <span className={`text-[10px] font-mono tracking-wide ${accent}`}>
          {note}
        </span>
      )}
    </div>
  );
}

export default function Skills() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="skills" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle label="Expertise" title="雙軸技能樹" />

        <div className="flex gap-0 md:gap-8 lg:gap-12 mt-4">
          {/* ─── OT Column ────────────────────────────────────────────────── */}
          <div className="flex-1">
            {/* Column header */}
            <div
              ref={headerRef}
              className={`reveal ${headerInView ? "in-view" : ""} mb-8`}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="w-2 h-2 rounded-full bg-amber/70 flex-shrink-0" />
                <span className="text-xs font-mono tracking-[0.18em] uppercase text-amber/80">
                  Industrial / OT
                </span>
              </div>
              <p className="text-xs text-dim ml-5">
                工廠底層 · 控制系統 · 通訊協定
              </p>
            </div>

            {/* Skill bars */}
            <div className="flex flex-col mb-8">
              {OT_SKILLS.map((s, i) => (
                <SkillItem key={s.name} {...s} variant="ot" delay={i * 60} />
              ))}
            </div>

            {/* Tag cloud */}
            <div className="flex flex-wrap gap-2">
              {OT_TAGS.map((t) => (
                <SkillBadge key={t} name={t} variant="ot" />
              ))}
            </div>
          </div>

          {/* ─── Center Divider ───────────────────────────────────────────── */}
          <div className="hidden md:flex flex-col items-center pt-12">
            <div className="skill-divider flex-1 min-h-[360px]" />
            <span
              className="font-display text-xl font-bold text-cyan glow-text my-4 select-none"
              aria-hidden="true"
            >
              ×
            </span>
            <div
              className="w-px flex-1 min-h-[40px]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,212,255,0.2), transparent)",
              }}
            />
          </div>

          {/* ─── IT Column ────────────────────────────────────────────────── */}
          <div className="flex-1">
            {/* Column header */}
            <div
              className={`reveal ${
                headerInView ? "in-view reveal-d2" : ""
              } mb-8`}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan/70 flex-shrink-0" />
                <span className="text-xs font-mono tracking-[0.18em] uppercase text-cyan/80">
                  Software / IT
                </span>
              </div>
              <p className="text-xs text-dim ml-5">
                全端開發 · AI 推論 · 資料工程
              </p>
            </div>

            {/* Skill bars */}
            <div className="flex flex-col mb-8">
              {IT_SKILLS.map((s, i) => (
                <SkillItem
                  key={s.name}
                  {...s}
                  variant="it"
                  delay={i * 60 + 80}
                />
              ))}
            </div>

            {/* Tag cloud */}
            <div className="flex flex-wrap gap-2">
              {IT_TAGS.map((t) => (
                <SkillBadge key={t} name={t} variant="it" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.07]">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-dim mb-6">
            Dev Workflow
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {WORKFLOW.map((item, i) => (
              <div
                key={item.name}
                className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3"
              >
                <p className="text-sm font-medium text-primary mb-1">
                  {item.name}
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
