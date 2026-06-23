import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import stats from '@/data/stats'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-28 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-6 inline-block rounded border border-[var(--fg)] px-3 py-1 text-xs font-semibold tracking-[0.1em]">
          OPC
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-[var(--fg)] mb-5">
          AI 时代的<br />"一人公司"从这里启航
        </h1>
        <p className="mx-auto max-w-xl text-lg text-[var(--muted)] mb-8 leading-relaxed">
          连接、赋能、验证——你的 AI 创业第一站
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button size="lg" className="h-10 px-6 text-sm" asChild>
            <Link to="/blog">加入社区</Link>
          </Button>
          <Button variant="outline" size="lg" className="h-10 px-6 text-sm" asChild>
            <a href="#projects">观看视频</a>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-2xl border-t border-[var(--border)] px-4 pt-6">
        <div className="flex items-center justify-center gap-8 text-sm text-[var(--muted)]">
          {stats.slice(0, 2).map(s => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="font-semibold text-[var(--fg)]">{s.value}</span>
              <span>{s.label}</span>
            </div>
          ))}
          <span className="h-4 w-px bg-[var(--border)]" />
          <span className="text-[var(--muted)]">
            <span className="font-semibold text-[var(--fg)]">128</span> 位创业者已加入
          </span>
        </div>
      </div>
    </section>
  )
}
