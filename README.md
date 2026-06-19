# Kevin Lai — Portfolio

React 18 + Vite + Tailwind CSS v4 個人作品集網站。

## 快速啟動

```bash
npm install
npm run dev
```

## 部署前必填

| 檔案 | 位置 | 說明 |
|------|------|------|
| `vite.config.js` | `base: '/portfolio/'` | 改成你的 GitHub repo 名稱 |
| `src/components/Contact.jsx` | `your@email.com` | 填入真實 email |
| `src/components/Contact.jsx` | 104 連結 | 填入真實 104 履歷連結 |
| `src/components/FeaturedProjects.jsx` | `github` 欄位 | 填入正確 repo URL |
| `package.json` | `homepage` | 加入 `"homepage": "https://kapy0312.github.io/portfolio"` |

## GitHub Pages 部署

```bash
# 在 package.json 加入 "homepage" 後：
npm run deploy
```

## Vercel 部署

1. 將 `vite.config.js` 中的 `base` 改為 `'/'`
2. 直接 connect repo 到 Vercel，Framework Preset 選 Vite

## 專案結構

```
src/
├── index.css              # Tailwind v4 + 設計系統
├── main.jsx
├── App.jsx                # Navbar + Section 組裝
├── hooks/
│   └── useInView.js       # IntersectionObserver scroll-reveal
└── components/
    ├── Hero.jsx            # Hero section (完整)
    ├── Skills.jsx          # 雙欄技能樹 (完整)
    ├── ProjectCard.jsx     # featured / small 兩種 variant
    ├── FeaturedProjects.jsx
    ├── OtherProjects.jsx
    ├── Experience.jsx      # Timeline
    ├── Contact.jsx
    ├── SectionTitle.jsx    # 統一 Section 標題
    └── SkillBadge.jsx      # 技能標籤
```
