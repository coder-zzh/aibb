import { useParams, Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { posts, extractHeadings } from '../posts.js'

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
      <main className="post-page">
        <div className="post-404">
          <h1>404</h1>
          <p>文章未找到</p>
          <Link to="/blog" className="btn btn-primary">返回博客</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="post-page">
      <article className="post-content">
        <header className="post-header">
          <div className="post-breadcrumb">
            <Link to="/blog">← 返回文章列表</Link>
          </div>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <time>{post.date}</time>
            <span className="post-meta-dot">·</span>
            <span>{post.readingTime}</span>
            {post.tags.length > 0 && (
              <>
                <span className="post-meta-dot">·</span>
                {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
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

      <nav className="post-nav">
        {prev ? (
          <Link to={`/blog/${prev.slug}`} className="post-nav-link post-nav-prev">
            <span className="post-nav-label">上一篇</span>
            <span className="post-nav-title">{prev.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/blog/${next.slug}`} className="post-nav-link post-nav-next">
            <span className="post-nav-label">下一篇</span>
            <span className="post-nav-title">{next.title}</span>
          </Link>
        ) : <div />}
      </nav>
    </main>
  )
}
