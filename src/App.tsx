import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FantasyPremierLeague from './pages/FantasyPremierLeague'
import SainsburysProject from './pages/SainsburysProject'
import SmartHandGlove from './pages/SmartHandGlove'

function App() {
  const location = useLocation()
  useEffect(() => {
    // Smooth scroll offset for fixed navigation
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.hash) {
        const href = target.getAttribute('href')
        if (href?.startsWith('#')) {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <main>
              <Hero />
              <About />
              <Timeline />
              <Projects />
              <Certifications />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </>
        } />
        <Route path="/projects/fantasy-premier-league" element={<FantasyPremierLeague />} />
        <Route path="/projects/sainsburys" element={<SainsburysProject />} />
        <Route path="/projects/smart-hand-glove" element={<SmartHandGlove />} />
      </Routes>
    </div>
  )
}

export default App
