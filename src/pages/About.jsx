import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="about-page">
      <h1>关于 aibb</h1>
      <div className="about-body">
        <p>
          <strong>aibb</strong> 是一个关注 <strong>OPC（Open Creator Economy）</strong>的创业指南博客。
          记录创业路上的经验、思考与实用工具。
        </p>
        <p>内容涵盖：技术实现、产品设计、运营策略、行业观察等。</p>
        <p>欢迎通过博客留言或 GitHub 与我交流。</p>
      </div>
      <div className="about-links">
        <Link to="/blog" className="btn btn-primary">浏览文章</Link>
      </div>
    </main>
  )
}
