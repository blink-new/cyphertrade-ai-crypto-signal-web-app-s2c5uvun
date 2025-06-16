import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Dashboard } from './components/Dashboard'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    // Add dark class to html element for consistent dark theme
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <Hero />
        <Dashboard />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App