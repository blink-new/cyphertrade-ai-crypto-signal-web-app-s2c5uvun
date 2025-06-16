import { useState } from 'react'
import { Button } from './ui/button'
import { Zap, Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple cyber-glow">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold cyber-gradient-text">
              CypherTrade
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-slate-300 hover:text-cyber-blue transition-colors">
              Dashboard
            </a>
            <a href="#signals" className="text-slate-300 hover:text-cyber-blue transition-colors">
              Signals
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-cyber-blue transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-blue/80 hover:to-cyber-purple/80 text-white border-0 cyber-glow">
              Get Pro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800/50">
            <nav className="flex flex-col space-y-4">
              <a href="#dashboard" className="text-slate-300 hover:text-cyber-blue transition-colors">
                Dashboard
              </a>
              <a href="#signals" className="text-slate-300 hover:text-cyber-blue transition-colors">
                Signals
              </a>
              <a href="#pricing" className="text-slate-300 hover:text-cyber-blue transition-colors">
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-800/50">
                <Button variant="ghost" className="text-slate-300 hover:text-white justify-start">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-cyber-blue to-cyber-purple text-white border-0 justify-start">
                  Get Pro
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}