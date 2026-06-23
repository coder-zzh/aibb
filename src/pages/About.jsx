import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <main className="page-enter mx-auto max-w-[720px] px-4 py-12">
      <h1 className="text-2xl font-bold tracking-tight text-[var(--fg)] mb-6">关于 aibb</h1>
      <div className="max-w-[560px]">
        <p className="mb-4 text-base leading-relaxed text-[var(--fg-2)]">
          <strong className="text-[var(--fg)]">aibb</strong> 是一个关注 <strong className="text-[var(--fg)]">OPC（Open Creator Economy）</strong>的创业指南博客。
          记录创业路上的经验、思考与实用工具。
        </p>
        <p className="mb-4 text-base leading-relaxed text-[var(--fg-2)]">
          内容涵盖：技术实现、产品设计、运营策略、行业观察等。
        </p>
        <p className="mb-4 text-base leading-relaxed text-[var(--fg-2)]">
          欢迎通过博客留言或 GitHub 与我交流。
        </p>
      </div>
      <div className="mt-8">
        <Button asChild>
          <Link to="/blog">浏览文章</Link>
        </Button>
      </div>
    </main>
  )
}
