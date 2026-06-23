import stats from '@/data/stats'

export default function TrustBar() {
  return (
    <section className="border-y border-[var(--border)] py-10">
      <div className="mx-auto max-w-3xl px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-[var(--fg)]">{s.value}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
