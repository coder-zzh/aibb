import { useParams, Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { posts, extractHeadings } from '../posts.js'
import { Button } from '@/components/ui/button'

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, '-').replace(/(^-|-$)/g, '')
}

function getText(children) {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(c => getText(c)).join('')
  if (children?.props?.children) return getText(children.props.children)
  return ''
}

export default function Post() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  const currentIdx = posts.findIndex(p => p.slug === slug)
  const prev = currentIdx > 0 ? posts[currentIdx - 1] : null
  const next = currentIdx < posts.length - 1 ? posts[currentIdx + 1] : null
  const toc = post ? extractHeadings(post.content) : []

  if (!post) {
    return (
      <main className="page-enter mx-auto max-w-[720px] px-4 py-12 text-center">
        <div className="py-16">
          <h1 className="text-5xl font-bold text-[var(--fg)] mb-4">404</h1>
          <p className="text-[var(--muted-foreground)] mb-6">文章未找到</p>
          <Button asChild>
            <Link to="/blog">返回博客</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="page-enter mx-auto max-w-[720px] px-4 py-12">
      <article>
        <header className="mb-10">
          <div className="mb-6">
            <Link to="/blog" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--fg)] transition-colors">
              ← 返回文章列表
            </Link>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--fg)] mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] flex-wrap">
            <time>{post.date}</time>
            <span className="text-[var(--border)]">·</span>
            <span>{post.readingTime}</span>
            {post.tags.length > 0 && (
              <>
                <span className="text-[var(--border)]">·</span>
                {post.tags.map(t => (
                  <span key={t} className="inline-block rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs font-medium text-[var(--muted-foreground)]">{t}</span>
                ))}
              </>
            )}
          </div>
        </header>

        {toc.length > 1 && (
          <nav className="toc">
            <div className="toc-title">目录</div>
            <ul className="toc-list">
              {toc.map(h => (
                <li key={h.id} className={`toc-item toc-l${h.level}`}>
                  <a href={`#${h.id}`}>{h.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="post-body">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2({ children, ...props }) { return <h2 id={slugify(getText(children))} {...props}>{children}</h2> },
              h3({ children, ...props }) { return <h3 id={slugify(getText(children))} {...props}>{children}</h3> },
              pre({ children }) {
                const el = children?.props
                if (el?.className?.startsWith?.('language-')) {
                  return (
                    <div className="code-block-wrapper">
                      <div className="code-lang">{el.className.replace('language-', '')}</div>
                      <pre>{children}</pre>
                    </div>
                  )
                }
                return <pre>{children}</pre>
              },
            }}
          >{post.content}</Markdown>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-[var(--border)] flex justify-between gap-4">
        {prev ? (
          <Link to={`/blog/${prev.slug}`} className="flex-1 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--fg)] transition-colors no-underline">
            <span className="block text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-1">上一篇</span>
            <span className="block text-sm font-medium text-[var(--fg)]">{prev.title}</span>
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link to={`/blog/${next.slug}`} className="flex-1 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--fg)] transition-colors text-right no-underline">
            <span className="block text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-1">下一篇</span>
            <span className="block text-sm font-medium text-[var(--fg)]">{next.title}</span>
          </Link>
        ) : <div className="flex-1" />}
      </nav>
    </main>
  )
}
