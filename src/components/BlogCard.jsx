import { Link } from 'react-router-dom'

export default function BlogCard({ slug, title, date, tags, readingTime, excerpt }) {
  return (
    <article className="blog-card">
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <time>{date}</time>
          {tags.length > 0 && tags.map(t => <span key={t} className="tag">{t}</span>)}
          <span className="blog-card-dot">·</span>
          <span>{readingTime}</span>
        </div>
        <h2><Link to={`/blog/${slug}`}>{title}</Link></h2>
        <p>{excerpt}</p>
      </div>
      <Link to={`/blog/${slug}`} className="blog-card-arrow" aria-label="阅读全文">→</Link>
    </article>
  )
}
