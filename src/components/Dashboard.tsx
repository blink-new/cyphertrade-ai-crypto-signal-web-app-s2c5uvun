import { CryptoCard } from './CryptoCard'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Crown, Zap, Clock, Target } from 'lucide-react'

// Mock data for demonstration
const mockCryptoData = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 67250,
    change24h: 2.45,
    signal: 'buy' as const,
    confidence: 92,
    volume: '$28.5B',
    marketCap: '$1.3T'
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: 3850,
    change24h: -1.23,
    signal: 'hold' as const,
    confidence: 76,
    volume: '$15.2B',
    marketCap: '$463B'
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    price: 198,
    change24h: 5.67,
    signal: 'buy' as const,
    confidence: 88,
    volume: '$3.8B',
    marketCap: '$94B'
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    price: 1.25,
    change24h: -3.45,
    signal: 'sell' as const,
    confidence: 82,
    volume: '$1.2B',
    marketCap: '$44B'
  },
  {
    symbol: 'DOT',
    name: 'Polkadot',
    price: 8.95,
    change24h: 1.89,
    signal: 'buy' as const,
    confidence: 79,
    volume: '$856M',
    marketCap: '$12B'
  }
]

export function Dashboard() {
  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Live Signal Dashboard
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real-time AI-powered cryptocurrency trading signals for the top digital assets
          </p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-slate-900/50 border-slate-700/50 hover:border-cyber-blue/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-cyber-green/20">
                  <Target className="h-6 w-6 text-cyber-green" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">18</div>
                  <div className="text-sm text-slate-400">Active Signals</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700/50 hover:border-cyber-purple/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-cyber-purple/20">
                  <Zap className="h-6 w-6 text-cyber-purple" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">95.2%</div>
                  <div className="text-sm text-slate-400">Avg Accuracy</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700/50 hover:border-cyber-blue/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-cyber-blue/20">
                  <Clock className="h-6 w-6 text-cyber-blue" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">2m</div>
                  <div className="text-sm text-slate-400">Last Update</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700/50 hover:border-cyber-yellow/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-cyber-yellow/20">
                  <Crown className="h-6 w-6 text-cyber-yellow" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Free</div>
                  <div className="text-sm text-slate-400">Current Plan</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crypto Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockCryptoData.map((crypto) => (
            <CryptoCard key={crypto.symbol} {...crypto} />
          ))}
        </div>

        {/* Upgrade CTA */}
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyber-purple/50 cyber-glow-purple">
          <CardHeader>
            <CardTitle className="text-white text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Crown className="h-6 w-6 text-cyber-yellow" />
                <span className="cyber-gradient-text">Unlock Pro Features</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-300 mb-6">
              Get access to 100+ cryptocurrencies, advanced signals, real-time updates, and portfolio tracking
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyber-purple to-cyber-pink hover:from-cyber-purple/80 hover:to-cyber-pink/80 text-white border-0 cyber-glow-purple"
              >
                Upgrade to Pro - $9.99/month
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:text-white hover:border-cyber-purple"
              >
                View Pro Features
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}