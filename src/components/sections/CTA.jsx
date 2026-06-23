import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const partners = ['阿里云', 'Vercel', 'Supabase', 'GitHub', 'Notion']

export default function CTA() {
  return (
    <section className="py-16 md:py-20 text-center">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-2xl font-bold text-[var(--fg)] mb-3">
          准备好开始你的 OPC 之旅了吗？
        </h2>
        <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">
          加入社区，获得从 0 到 1 所需的一切——社群、能力、工具、服务。
        </p>
        <Button size="lg" className="h-11 px-8 text-base" asChild>
          <Link to="/blog">立刻入驻</Link>
        </Button>
      </div>

      <div className="mx-auto mt-14 max-w-3xl border-t border-[var(--border)] px-4 pt-8">
        <p className="text-xs text-[var(--muted)] mb-4 tracking-widest uppercase">合作伙伴</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {partners.map(p => (
            <span key={p} className="text-sm font-medium text-[var(--muted)] opacity-60">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
