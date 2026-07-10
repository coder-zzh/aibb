import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { posts } from '@/posts'

export default function CommunityFeed() {
  const latest = posts.slice(0, 5)

  return (
    <section id="community" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--fg) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-2">社区动态</h2>
            <p className="text-[var(--muted-foreground)] text-sm">最新文章、热门讨论与活动预告</p>
          </div>
          <Button variant="outline" className="hidden sm:inline-flex h-9 px-4 text-sm" asChild>
            <Link to="/blog">查看全部 →</Link>
          </Button>
        </div>

        {latest.length === 0 && (
          <p className="text-center py-12 text-sm text-[var(--muted-foreground)]">暂无内容，敬请期待</p>
        )}

        <div className="divide-y divide-[var(--border)]">
          {latest.map(p => (
            <article key={p.slug} className="py-5 first:pt-0">
              <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-2">
                <time>{p.date}</time>
                {p.tags.length > 0 && (
                  <>
                    <span className="text-[var(--border)]">·</span>
                    {p.tags.map(t => (
                      <Badge key={t} variant="outline" className="text-[11px] px-2 py-0">{t}</Badge>
                    ))}
                  </>
                )}
                {p.readingTime && (
                  <>
                    <span className="text-[var(--border)]">·</span>
                    <span>{p.readingTime}</span>
                  </>
                )}
              </div>
              <h3>
                <Link to={`/blog/${p.slug}`} className="font-semibold text-[var(--fg)] text-base hover:text-[var(--muted-foreground)] transition-colors">
                  {p.title}
                </Link>
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mt-1.5 line-clamp-2 leading-relaxed">{p.excerpt}</p>
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
