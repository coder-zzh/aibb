import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import stats from '@/data/stats'

const bgUrl = `${import.meta.env.BASE_URL}images/hero-bg.jpg`

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 text-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgUrl})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--bg)]" />

      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4">
        <div className="mb-6 inline-block rounded border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.1em] text-white/80 backdrop-blur-sm">
          OPC
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-white mb-5">
          AI 时代的<br />"一人公司"从这里启航
        </h1>
        <p className="mx-auto max-w-xl text-lg text-white/60 mb-8 leading-relaxed">
          连接、赋能、验证——你的 AI 创业第一站
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button size="lg" className="h-10 px-6 text-sm bg-white text-red-500 hover:bg-white/90" asChild>
            <Link to="/blog">加入社区</Link>
          </Button>
          <Button variant="outline" size="lg" className="h-10 px-6 text-sm border-white/20 text-white/80 hover:bg-white/10" asChild>
            <a href="#features">了解更多</a>
          </Button>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-2xl border-t border-white/10 px-4 pt-6">
        <div className="flex items-center justify-center gap-8 text-sm text-white/50">
          {stats.slice(0, 2).map(s => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="font-semibold text-white">{s.value}</span>
              <span>{s.label}</span>
            </div>
          ))}
          <span className="h-4 w-px bg-white/10" />
          <span>
            <span className="font-semibold text-white">128</span> 位创业者已加入
          </span>
        </div>
      </div>
    </section>
  )
}
