import { useEffect } from 'react'
import { CryptoCard } from './CryptoCard'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Skeleton } from './ui/skeleton'
import { Crown, Zap, Clock, Target, RefreshCw, AlertCircle } from 'lucide-react'
import { useCryptoData } from '@/hooks/useCryptoData'
import { useAuth } from '@/contexts/AuthContext'

export function Dashboard() {
  const { profile } = useAuth()
  const { signals, loading, error, refreshData } = useCryptoData()

  // Refresh data on component mount
  useEffect(() => {
    refreshData()
  }, [])

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
                  <div className="text-2xl font-bold text-white">{signals.length}</div>
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
                  <div className="text-2xl font-bold text-white">
                    {signals.length > 0 
                      ? Math.round(signals.reduce((acc, s) => acc + s.confidence, 0) / signals.length) 
                      : 0}%
                  </div>
                  <div className="text-sm text-slate-400">Avg Confidence</div>
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
                  <div className="text-2xl font-bold text-white">Live</div>
                  <div className="text-sm text-slate-400">Updates</div>
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
                  <div className="text-2xl font-bold text-white">
                    {profile?.subscription_tier === 'pro' ? 'Pro' : 'Free'}
                  </div>
                  <div className="text-sm text-slate-400">Current Plan</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-end mb-6">
          <Button
            onClick={refreshData}
            variant="outline"
            className="border-slate-600 text-slate-300 hover:text-white hover:border-cyber-blue"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
        </div>

        {/* Error State */}
        {error && (
          <Card className="bg-red-900/20 border-red-700/50 mb-6">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-6 w-6 text-red-400" />
                <div>
                  <p className="text-red-400 font-medium">Error loading crypto data</p>
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Crypto Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="bg-slate-900/50 border-slate-700/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-10 w-32 bg-slate-700" />
                      <Skeleton className="h-6 w-16 bg-slate-700" />
                    </div>
                    <Skeleton className="h-8 w-24 bg-slate-700" />
                    <Skeleton className="h-2 w-full bg-slate-700" />
                    <div className="grid grid-cols-2 gap-4">
                      <Skeleton className="h-6 w-20 bg-slate-700" />
                      <Skeleton className="h-6 w-20 bg-slate-700" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : signals.length > 0 ? (
            signals.map((signal) => (
              <CryptoCard
                key={signal.id}
                symbol={signal.symbol}
                name={signal.name}
                price={signal.price}
                change24h={signal.change_24h}
                signal={signal.signal}
                confidence={signal.confidence}
                volume={signal.volume_24h}
                marketCap={signal.market_cap}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-400">No crypto data available. Click refresh to load data.</p>
            </div>
          )}
        </div>

        {/* Upgrade CTA for Free Users */}
        {profile?.subscription_tier !== 'pro' && (
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
                Get access to 100+ cryptocurrencies, advanced signals with detailed reasoning, 
                real-time hourly updates, portfolio tracking, and custom alerts
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
        )}
      </div>
    </section>
  )
}