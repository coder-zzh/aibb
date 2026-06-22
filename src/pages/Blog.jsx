import { useSearchParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard.jsx'
import { posts, allTags } from '../posts.js'

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTag = searchParams.get('tag') || ''

  const filtered = activeTag ? posts.filter(p => p.tags.includes(activeTag)) : posts

  return (
    <main className="blog-page">
      <header className="blog-header">
        <h1>文章</h1>
        {activeTag && (
          <p className="blog-filter-hint">
            筛选：<span className="tag">{activeTag}</span>
            <button className="blog-clear-filter" onClick={() => setSearchParams({})}>清除</button>
          </p>
        )}
      </header>

      {allTags.length > 0 && (
        <div className="blog-tags">
          <button
            className={`blog-tag-btn ${!activeTag ? 'active' : ''}`}
            onClick={() => setSearchParams({})}
          >全部</button>
          {allTags.map(t => (
            <button
              key={t}
              className={`blog-tag-btn ${activeTag === t ? 'active' : ''}`}
              onClick={() => setSearchParams({ tag: t })}
            >{t}</button>
          ))}
        </div>
      )}

      <div className="blog-list">
        {filtered.length === 0 ? (
          <p className="blog-empty">暂无文章</p>
        ) : (
          filtered.map(p => <BlogCard key={p.slug} {...p} />)
        )}
      </div>
    </main>
  )
}
