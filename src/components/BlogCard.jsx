import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'

export default function BlogCard({ slug, title, date, tags, readingTime, excerpt }) {
  return (
    <article className="py-4">
      <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-1.5">
        <time>{date}</time>
        {tags.length > 0 && tags.map(t => (
          <Badge key={t} variant="outline" className="text-[11px] px-2 py-0">{t}</Badge>
        ))}
        <span className="text-[var(--border)]">·</span>
        <span>{readingTime}</span>
      </div>
      <h2>
        <Link to={`/blog/${slug}`} className="font-semibold text-[var(--fg)] text-base hover:opacity-70 transition-opacity">
          {title}
        </Link>
      </h2>
      <p className="text-sm text-[var(--muted)] mt-1">{excerpt}</p>
    </article>
  )
}
