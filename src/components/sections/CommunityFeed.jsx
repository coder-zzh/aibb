import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { posts } from '@/posts'

export default function CommunityFeed() {
  const latest = posts.slice(0, 5)

  return (
    <section id="community" className="py-16 md:py-20 bg-[var(--surface)]">
      <div className="mx-auto max-w-3xl px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-2">社区动态</h2>
            <p className="text-[var(--muted)] text-sm">最新文章、热门讨论与活动预告</p>
          </div>
          <Button variant="outline" className="hidden sm:inline-flex h-9 px-4 text-sm" asChild>
            <Link to="/blog">查看全部 →</Link>
          </Button>
        </div>

        {latest.length === 0 && (
          <p className="text-center py-12 text-sm text-[var(--muted)]">暂无内容，敬请期待</p>
        )}

        <div className="divide-y divide-[var(--border)]">
          {latest.map(p => (
            <article key={p.slug} className="py-4">
              <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-1.5">
                <time>{p.date}</time>
                {p.tags.length > 0 && (
                  <>
                    <span className="text-[var(--border)]">·</span>
                    {p.tags.map(t => (
                      <Badge key={t} variant="outline" className="text-[11px] px-2 py-0">{t}</Badge>
                    ))}
                  </>
                )}
                <span className="text-[var(--border)]">·</span>
                <span>{p.readingTime}</span>
              </div>
              <h3>
                <Link to={`/blog/${p.slug}`} className="font-semibold text-[var(--fg)] text-base hover:opacity-70 transition-opacity">
                  {p.title}
                </Link>
              </h3>
              <p className="text-sm text-[var(--muted)] mt-1 line-clamp-2">{p.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Button variant="outline" className="h-9 px-4 text-sm" asChild>
            <Link to="/blog">查看全部 →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
