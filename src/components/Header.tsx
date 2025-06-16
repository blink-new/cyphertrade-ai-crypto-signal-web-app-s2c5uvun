import { useState } from 'react'
import { Button } from './ui/button'
import { Zap, Menu, X, Crown, User } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { AuthModal } from './AuthModal'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { user, profile, signOut } = useAuth()

  return (
    <>
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

            {/* Desktop Auth/User Section */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  {profile?.subscription_tier === 'pro' && (
                    <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gradient-to-r from-cyber-yellow/20 to-cyber-yellow/10 border border-cyber-yellow/30">
                      <Crown className="h-4 w-4 text-cyber-yellow" />
                      <span className="text-xs font-medium text-cyber-yellow">PRO</span>
                    </div>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-slate-300 hover:text-white">
                        <User className="h-4 w-4 mr-2" />
                        {user.email}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-slate-900 border-slate-700">
                      <DropdownMenuLabel className="text-slate-400">My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-slate-700" />
                      <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-800">
                        Profile
                      </DropdownMenuItem>
                      {profile?.subscription_tier === 'free' && (
                        <DropdownMenuItem className="text-cyber-yellow hover:text-cyber-yellow hover:bg-slate-800">
                          <Crown className="h-4 w-4 mr-2" />
                          Upgrade to Pro
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-800">
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-slate-700" />
                      <DropdownMenuItem 
                        onClick={signOut}
                        className="text-red-400 hover:text-red-300 hover:bg-slate-800"
                      >
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    className="text-slate-300 hover:text-white"
                    onClick={() => setIsAuthModalOpen(true)}
                  >
                    Sign In
                  </Button>
                  <Button className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-blue/80 hover:to-cyber-purple/80 text-white border-0 cyber-glow">
                    Get Pro
                  </Button>
                </>
              )}
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
                  {user ? (
                    <>
                      <div className="text-sm text-slate-400 px-2">{user.email}</div>
                      {profile?.subscription_tier === 'pro' && (
                        <div className="flex items-center space-x-1 px-2">
                          <Crown className="h-4 w-4 text-cyber-yellow" />
                          <span className="text-xs font-medium text-cyber-yellow">PRO</span>
                        </div>
                      )}
                      <Button 
                        variant="ghost" 
                        className="text-red-400 hover:text-red-300 justify-start"
                        onClick={signOut}
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="ghost" 
                        className="text-slate-300 hover:text-white justify-start"
                        onClick={() => setIsAuthModalOpen(true)}
                      >
                        Sign In
                      </Button>
                      <Button className="bg-gradient-to-r from-cyber-blue to-cyber-purple text-white border-0 justify-start">
                        Get Pro
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  )
}