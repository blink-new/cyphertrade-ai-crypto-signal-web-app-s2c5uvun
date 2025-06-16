import { Zap, Twitter, Github, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-slate-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple cyber-glow">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold cyber-gradient-text">
                CypherTrade
              </span>
            </div>
            <p className="text-sm text-slate-400">
              AI-powered cryptocurrency trading signals for the modern trader. 
              Make smarter trades with our cybernetic analysis engine.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#dashboard" className="text-slate-400 hover:text-cyber-blue transition-colors">Dashboard</a></li>
              <li><a href="#signals" className="text-slate-400 hover:text-cyber-blue transition-colors">Signals</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-cyber-blue transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 CypherTrade. All rights reserved. Built with ⚡ by the future.
          </p>
        </div>
      </div>
    </footer>
  )
}