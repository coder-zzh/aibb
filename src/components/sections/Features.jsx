const features = [
  {
    title: '社群连接',
    desc: '与志同道合的创业者、开发者、设计师交流。每周线上分享、项目组队、资源对接。',
    icon: '👥',
  },
  {
    title: '能力成长',
    desc: '从产品、技术到运营的全链路学习路径。非技术背景也能快速上手。',
    icon: '📈',
  },
  {
    title: '工具赋能',
    desc: 'AI 工具链、低代码平台、部署方案，让你一个人也能做出一支团队的事。',
    icon: '⚡',
  },
  {
    title: '服务支持',
    desc: '域名、服务器、设计素材、法律合规——创业所需的基础设施一站式覆盖。',
    icon: '🛠',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-bold text-[var(--fg)] mb-2">OPC 四大支撑</h2>
        <p className="text-[var(--muted-foreground)] mb-10 max-w-lg">
          社群、能力、工具、服务——四位一体，覆盖一人公司从 0 到 1 的全部需求。
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(f => (
            <article key={f.title} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--surface)] text-xl">
                {f.icon}
              </div>
              <h3 className="font-semibold text-[var(--fg)] mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
