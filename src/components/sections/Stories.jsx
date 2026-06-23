import stories from '@/data/stories'

export default function Stories() {
  return (
    <section id="stories" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-bold text-[var(--fg)] mb-2">成功故事</h2>
        <p className="text-[var(--muted)] mb-10 max-w-lg">
          看看社区成员如何从 0 到 1，在 OPC 的陪伴下迈出第一步。
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {stories.map(s => (
            <article key={s.name} className="rounded-lg border border-[var(--border)] p-6 flex flex-col">
              <div className="mb-4">
                <div className="font-semibold text-[var(--fg)]">{s.name}</div>
                <div className="text-xs text-[var(--muted)]">{s.role}</div>
              </div>
              <p className="text-sm text-[var(--fg-2)] leading-relaxed mb-4 flex-1">{s.summary}</p>
              <blockquote className="border-l-2 border-[var(--fg)] pl-3 text-sm italic text-[var(--muted)]">
                "{s.quote}"
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
