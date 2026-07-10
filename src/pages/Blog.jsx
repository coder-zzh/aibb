import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard.jsx'
import { posts, allTags } from '../posts.js'

const qrUrl = `${import.meta.env.BASE_URL}images/微信二维码.jpg`

export default function Blog() {
  const [showQR, setShowQR] = useState(false)
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
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl font-bold tracking-tight text-[var(--fg)] mb-2">文章</h1>
            {activeTag && (
              <p className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                筛选：<span className="inline-block rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs font-medium text-[var(--muted-foreground)]">{activeTag}</span>
                <button className="text-xs underline text-[var(--muted-foreground)] hover:text-[var(--fg)] cursor-pointer bg-none border-none p-0" onClick={() => setSearchParams({})}>清除</button>
              </p>
            )}
            {searchQuery && (
              <p className="text-sm text-[var(--muted-foreground)]">
                搜索："{searchQuery}"
                <button className="ml-2 text-xs underline text-[var(--muted-foreground)] hover:text-[var(--fg)] cursor-pointer bg-none border-none p-0" onClick={() => setSearchParams({})}>清除</button>
              </p>
            )}
          </div>
          <div className="shrink-0">
            <div className="flex flex-col items-center gap-1.5">
              <img src={qrUrl} alt="许经理微信" className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl border border-[var(--border)] shadow-sm cursor-pointer" onClick={() => setShowQR(true)} />
              <span className="text-xs text-[var(--muted-foreground)]">扫码联系</span>
            </div>
          </div>
        </div>
      </header>

      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[var(--border)]">
          <button
            className={`px-3 py-1 text-sm rounded-full border cursor-pointer font-[family-name:var(--font-body)] transition-colors ${
              !activeTag ? 'border-[var(--fg)] text-[var(--fg)]' : 'border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--fg)] hover:text-[var(--fg)]'
            }`}
            onClick={() => setSearchParams({})}
          >全部</button>
          {allTags.map(t => (
            <button
              key={t}
              className={`px-3 py-1 text-sm rounded-full border cursor-pointer font-[family-name:var(--font-body)] transition-colors ${
                activeTag === t ? 'border-[var(--fg)] text-[var(--fg)]' : 'border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--fg)] hover:text-[var(--fg)]'
              }`}
              onClick={() => setSearchParams({ tag: t })}
            >{t}</button>
          ))}
        </div>
      )}

      <div className="divide-y divide-[var(--border)]">
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-sm text-[var(--muted-foreground)]">暂无文章</p>
        ) : (
          filtered.map(p => <BlogCard key={p.slug} {...p} />)
        )}
      </div>

      {showQR && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-in fade-in"
          onClick={() => setShowQR(false)}
        >
          <img
            src={qrUrl}
            alt="许经理微信"
            className="max-w-[85vw] max-h-[85vh] rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  )
}
