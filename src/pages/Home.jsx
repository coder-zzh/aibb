import { Link } from 'react-router-dom'
import { posts, allTags } from '../posts.js'

export default function Home() {
  const latest = posts.slice(0, 4)
  return (
    <main className="home">
      <section className="hero-section">
        <div className="hero-badge">OPC</div>
        <h1>从零开始，<br />构建你的创业蓝图</h1>
        <p className="hero-desc">记录 OPC 创业路上的经验、思考与工具，帮助每一个创业者少走弯路。</p>
        <div className="hero-actions">
          <Link to="/blog" className="btn btn-primary">浏览文章</Link>
          <Link to="/about" className="btn btn-secondary">了解更多</Link>
        </div>
      </section>

      {allTags.length > 0 && (
        <section className="topics-section">
          <div className="topics-list">
            {allTags.map(t => (
              <Link key={t} to={`/blog?tag=${t}`} className="topic-tag">{t}</Link>
            ))}
          </div>
        </section>
      )}

      <section className="latest-section">
        <div className="section-header">
          <h2 className="section-title">最新文章</h2>
          <Link to="/blog" className="section-more">查看全部 →</Link>
        </div>
        <div className="post-grid">
          {latest.map(p => (
            <article key={p.slug} className="feature-card">
              <div className="feature-card-meta">
                <time>{p.date}</time>
                {p.tags.length > 0 && p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                <span className="feature-card-dot">·</span>
                <span>{p.readingTime}</span>
              </div>
              <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
              <p>{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
