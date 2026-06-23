import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Features from '@/components/sections/Features'
import Projects from '@/components/sections/Projects'
import Stories from '@/components/sections/Stories'
import CommunityFeed from '@/components/sections/CommunityFeed'
import CTA from '@/components/sections/CTA'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const section = params.get('section')
    if (section) {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location.search])

  return (
    <main className="page-enter">
      <Hero />
      <TrustBar />
      <Features />
      <Projects />
      <Stories />
      <CommunityFeed />
      <CTA />
    </main>
  )
}
