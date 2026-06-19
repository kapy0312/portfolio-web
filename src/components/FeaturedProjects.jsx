import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const FEATURED = [
  {
    title: "VLT CNC 多站拋光系統",
    highlight:
      "生產環境部署的多站 CNC 協調控制系統：SINUMERIK ONE 主機協調 4 支 Sub-Station，C# HMI 即時監控，SFTP 自動派送 NC 程式，POKE_BLK 鏡像 DB 同步站台資料。",
    tags: [
      "SINUMERIK ONE",
      "TIA Portal",
      "C# / WinForms",
      "SFTP / WinSCP",
      "OPC-UA",
    ],
    nda: true,
    github: "https://github.com/kapy0312/vlt-cnc-showcase",
    githubNote: "NDA 保護，不公開原始碼",
    demo: null,
    demoNote: "NDA 保護，不提供 Demo",
    mediaNote: "NDA · 僅提供架構說明",
  },
  {
    title: "IIoT SCADA 平台",
    highlight:
      "全端工廠監控平台：OPC-UA（Siemens S7-1511T）+ SLMP（Mitsubishi FX5U）雙協定接入，TimescaleDB 時序壓縮與保留策略，Isolation Forest 異常偵測，Ollama LLM 自動診斷報告。",
    tags: [
      "FastAPI",
      "React",
      "TimescaleDB",
      "OPC-UA",
      "SLMP",
      "Isolation Forest",
      "Ollama",
      "Docker",
    ],
    nda: false,
    github: "https://github.com/kapy0312/iot-scada-platform",
    githubNote: null,
    demo: null,
    demoNote: "Demo 影片製作中",
    // mediaNote: "DEMO VIDEO COMING SOON",
    mediaUrl: "https://www.youtube.com/embed/gC_olDu9CFc",
    mediaType: "video",
  },
  {
    title: "BFX Lending Bot",
    highlight:
      "Bitfinex 放貸自動化商業桌面應用：UTC 01:30 結算週期對齊、帳本收益對帳、跨平台 Electron + React 打包，透過 Whop 平台授權銷售，擁有付費用戶，GitHub Actions CI/CD 自動建置 Win / macOS。",
    tags: [
      "Electron",
      "React",
      "SQLite",
      "Bitfinex API",
      "Whop",
      "GitHub Actions",
    ],
    nda: false,
    github: "https://github.com/kapy0312/bfx-lending-bot-showcase",
    githubNote: null,
    demo: null,
    demoNote: "Demo 影片製作中",
    mediaNote: "SCREENSHOT COMING SOON",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle label="Selected Work" title="精選作品" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {FEATURED.map((project, i) => (
            <ProjectCard
              key={project.title}
              variant="featured"
              project={project}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
