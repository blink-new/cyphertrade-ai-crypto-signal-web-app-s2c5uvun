import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface CryptoCardProps {
  symbol: string
  name: string
  price: number
  change24h: number
  signal: 'buy' | 'sell' | 'hold'
  confidence?: number
  volume?: string
  marketCap?: string
}

export function CryptoCard({ 
  symbol, 
  name, 
  price, 
  change24h, 
  signal, 
  confidence = 85,
  volume = 'N/A',
  marketCap = 'N/A'
}: CryptoCardProps) {
  const getSignalColor = (signal: string) => {
    switch (signal) {
      case 'buy':
        return 'bg-cyber-green text-white cyber-glow-green'
      case 'sell':
        return 'bg-cyber-red text-white cyber-glow-red'
      default:
        return 'bg-slate-600 text-white'
    }
  }

  const getSignalIcon = (signal: string) => {
    switch (signal) {
      case 'buy':
        return <TrendingUp className="h-4 w-4" />
      case 'sell':
        return <TrendingDown className="h-4 w-4" />
      default:
        return <Minus className="h-4 w-4" />
    }
  }

  const isPositive = change24h >= 0

  return (
    <Card className="bg-slate-900/50 border-slate-700/50 hover:border-cyber-blue/50 transition-all duration-300 hover:cyber-glow group">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center">
              <span className="text-white font-bold text-sm">{symbol.slice(0, 3)}</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">{symbol}</h3>
              <p className="text-sm text-slate-400">{name}</p>
            </div>
          </div>
          <Badge className={`${getSignalColor(signal)} font-mono text-xs flex items-center space-x-1`}>
            {getSignalIcon(signal)}
            <span>{signal.toUpperCase()}</span>
          </Badge>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="text-2xl font-bold text-white font-mono">
            ${price.toLocaleString()}
          </div>
          <div className={`text-sm font-medium flex items-center space-x-1 ${
            isPositive ? 'text-cyber-green' : 'text-cyber-red'
          }`}>
            {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            <span>{isPositive ? '+' : ''}{change24h.toFixed(2)}%</span>
            <span className="text-slate-400">24h</span>
          </div>
        </div>

        {/* Signal Confidence */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Signal Confidence</span>
            <span className="text-sm font-mono text-cyber-blue">{confidence}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyber-blue to-cyber-green h-2 rounded-full transition-all duration-500"
              style={{ width: `${confidence}%` }}
            ></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-slate-400">Volume (24h)</div>
            <div className="text-white font-mono">{volume}</div>
          </div>
          <div>
            <div className="text-slate-400">Market Cap</div>
            <div className="text-white font-mono">{marketCap}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}