import { useSearchParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard.jsx'
import { posts, allTags } from '../posts.js'

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTag = searchParams.get('tag') || ''
  const searchQuery = searchParams.get('q') || ''

  const filtered = searchQuery
    ? posts.filter(p => p.title.includes(searchQuery) || p.content.includes(searchQuery))
    : activeTag
      ? posts.filter(p => p.tags.includes(activeTag))
      : posts

  return (
    <main className="page-enter mx-auto max-w-[720px] px-4 py-12">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-[var(--fg)] mb-2">文章</h1>
        {activeTag && (
          <p className="flex items-center gap-2 text-sm text-[var(--muted)]">
            筛选：<span className="inline-block rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs font-medium text-[var(--muted)]">{activeTag}</span>
            <button className="text-xs underline text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer bg-none border-none p-0" onClick={() => setSearchParams({})}>清除</button>
          </p>
        )}
        {searchQuery && (
          <p className="text-sm text-[var(--muted)]">
            搜索："{searchQuery}"
            <button className="ml-2 text-xs underline text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer bg-none border-none p-0" onClick={() => setSearchParams({})}>清除</button>
          </p>
        )}
      </header>

      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[var(--border)]">
          <button
            className={`px-3 py-1 text-sm rounded-full border cursor-pointer font-[family-name:var(--font-body)] transition-colors ${
              !activeTag ? 'border-[var(--fg)] text-[var(--fg)]' : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--fg)] hover:text-[var(--fg)]'
            }`}
            onClick={() => setSearchParams({})}
          >全部</button>
          {allTags.map(t => (
            <button
              key={t}
              className={`px-3 py-1 text-sm rounded-full border cursor-pointer font-[family-name:var(--font-body)] transition-colors ${
                activeTag === t ? 'border-[var(--fg)] text-[var(--fg)]' : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--fg)] hover:text-[var(--fg)]'
              }`}
              onClick={() => setSearchParams({ tag: t })}
            >{t}</button>
          ))}
        </div>
      )}

      <div className="divide-y divide-[var(--border)]">
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-sm text-[var(--muted)]">暂无文章</p>
        ) : (
          filtered.map(p => <BlogCard key={p.slug} {...p} />)
        )}
      </div>
    </main>
  )
}
