import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import projects from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-[var(--surface)]">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-2">社区项目展示</h2>
            <p className="text-[var(--muted)] max-w-lg">
              社区成员从零开始构建的 AI 项目。发布→试用→反馈→迭代，每一个项目都在进步。
            </p>
          </div>
          <Button variant="outline" className="hidden sm:inline-flex h-9 px-4 text-sm">
            浏览全部项目
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <article key={p.title} className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[var(--muted)]">{p.author}</span>
              </div>
              <h3 className="font-semibold text-[var(--fg)] mb-2">{p.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <Badge key={t} variant="outline" className="text-[11px] px-2 py-0">{t}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Button variant="outline" className="h-9 px-4 text-sm">
            浏览全部项目
          </Button>
        </div>
      </div>
    </section>
  )
}
