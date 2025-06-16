import { Button } from './ui/button'
import { TrendingUp, Zap, Shield, BarChart3 } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-cyber-blue/20 blur-xl animate-cyber-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-cyber-purple/20 blur-xl animate-cyber-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-cyber-green/20 blur-xl animate-cyber-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="cyber-gradient-text">AI-Powered</span>
              <br />
              <span className="text-white">Crypto Signals</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto">
              Get data-driven cryptocurrency trading signals powered by advanced AI algorithms. 
              Make smarter trades with our cybernetic analysis engine.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 py-8">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800/50 border border-cyber-blue/30 cyber-glow">
              <TrendingUp className="h-4 w-4 text-cyber-blue" />
              <span className="text-sm text-white">Real-time Analysis</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800/50 border border-cyber-green/30 cyber-glow-green">
              <Zap className="h-4 w-4 text-cyber-green" />
              <span className="text-sm text-white">Instant Signals</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800/50 border border-cyber-purple/30 cyber-glow-purple">
              <Shield className="h-4 w-4 text-cyber-purple" />
              <span className="text-sm text-white">Risk Management</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800/50 border border-cyber-pink/30">
              <BarChart3 className="h-4 w-4 text-cyber-pink" />
              <span className="text-sm text-white">Portfolio Tracking</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-blue/80 hover:to-cyber-purple/80 text-white border-0 cyber-glow px-8 py-4 text-lg font-semibold"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-600 text-slate-300 hover:text-white hover:border-cyber-blue px-8 py-4 text-lg font-semibold"
            >
              View Live Signals
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl font-bold cyber-gradient-text">95%</div>
              <div className="text-slate-400 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold cyber-gradient-text">100+</div>
              <div className="text-slate-400 text-sm">Cryptocurrencies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold cyber-gradient-text">24/7</div>
              <div className="text-slate-400 text-sm">Market Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold cyber-gradient-text">10K+</div>
              <div className="text-slate-400 text-sm">Active Traders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}