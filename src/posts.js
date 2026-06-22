const modules = import.meta.glob('./content/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }
  const data = {}
  for (const line of match[1].split('\n')) {
    const sep = line.indexOf(': ')
    if (sep !== -1) data[line.slice(0, sep).trim()] = line.slice(sep + 2).trim()
  }
  if (typeof data.tags === 'string') data.tags = data.tags.split(',').map(t => t.trim()).filter(Boolean)
  return { data, content: match[2].trim() }
}

function readingTime(content) {
  const words = content.trim().split(/\s+/).length
  const min = Math.max(1, Math.round(words / 200))
  return `${min} 分钟阅读`
}

export const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.replace('./content/', '').replace('.md', '')
    const { data, content } = parseFrontmatter(mod.default || mod)
    const excerpt = content.replace(/^#+\s*/, '').split('\n').find(l => l.trim()).slice(0, 160) || ''
    return { slug, title: data.title || slug, date: data.date || '', tags: data.tags || [], readingTime: readingTime(content), excerpt, content }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export const allTags = [...new Set(posts.flatMap(p => p.tags))]

export function extractHeadings(markdown) {
  const lines = markdown.split('\n')
  const headings = []
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/)
    if (match) {
      const text = match[2].replace(/[`*_~]/g, '')
      const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, '-').replace(/(^-|-$)/g, '')
      headings.push({ level: match[1].length, text, id })
    }
  }
  return headings
}
