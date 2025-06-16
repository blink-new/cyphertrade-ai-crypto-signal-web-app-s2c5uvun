import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Check, X, Crown, Zap } from 'lucide-react'

export function Pricing() {
  const features = {
    free: [
      { name: 'Top 5 cryptocurrencies', included: true },
      { name: 'Basic Buy/Sell signals', included: true },
      { name: 'Simple price charts', included: true },
      { name: 'Daily signal updates', included: true },
      { name: 'Community support', included: true },
      { name: 'Advanced signals with reasoning', included: false },
      { name: '100+ cryptocurrencies', included: false },
      { name: 'Real-time hourly updates', included: false },
      { name: 'Portfolio tracker', included: false },
      { name: 'Custom alerts', included: false },
      { name: 'Exclusive market analysis', included: false },
      { name: 'Priority support', included: false }
    ],
    pro: [
      { name: 'Top 5 cryptocurrencies', included: true },
      { name: 'Basic Buy/Sell signals', included: true },
      { name: 'Simple price charts', included: true },
      { name: 'Daily signal updates', included: true },
      { name: 'Community support', included: true },
      { name: 'Advanced signals with reasoning', included: true },
      { name: '100+ cryptocurrencies', included: true },
      { name: 'Real-time hourly updates', included: true },
      { name: 'Portfolio tracker', included: true },
      { name: 'Custom alerts', included: true },
      { name: 'Exclusive market analysis', included: true },
      { name: 'Priority support', included: true }
    ]
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Choose Your <span className="cyber-gradient-text">Power Level</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Start free and upgrade when you're ready to unlock the full potential of AI-powered crypto trading
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <Card className="bg-slate-900/50 border-slate-700/50 hover:border-cyber-blue/50 transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-cyber-blue" />
                <CardTitle className="text-2xl text-white">Free Tier</CardTitle>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">$0</div>
                <div className="text-slate-400">Forever free</div>
              </div>
              <Badge variant="outline" className="border-cyber-blue text-cyber-blue">
                Perfect for beginners
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Features List */}
              <div className="space-y-3">
                {features.free.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-cyber-green flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-slate-500 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-white' : 'text-slate-500'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-blue/80 hover:to-cyber-purple/80 text-white border-0"
              >
                Get Started Free
              </Button>
            </CardContent>
          </Card>

          {/* Pro Tier */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyber-purple/50 cyber-glow-purple relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-cyber-purple to-cyber-pink text-white px-4 py-1">
                Most Popular
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Crown className="h-6 w-6 text-cyber-yellow" />
                <CardTitle className="text-2xl cyber-gradient-text">Pro Tier</CardTitle>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">$9.99</div>
                <div className="text-slate-400">per month</div>
              </div>
              <Badge className="bg-cyber-yellow/20 text-cyber-yellow border-cyber-yellow/50">
                Everything you need to profit
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Features List */}
              <div className="space-y-3">
                {features.pro.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-cyber-green flex-shrink-0" />
                    <span className="text-sm text-white">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-cyber-purple to-cyber-pink hover:from-cyber-purple/80 hover:to-cyber-pink/80 text-white border-0 cyber-glow-purple"
              >
                Upgrade to Pro
              </Button>
              
              <p className="text-xs text-slate-400 text-center">
                Cancel anytime. No hidden fees.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="text-sm text-slate-400 mb-4">Trusted by 10,000+ traders worldwide</div>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-slate-500 font-semibold">30-day money back</div>
            <div className="w-px h-4 bg-slate-600"></div>
            <div className="text-slate-500 font-semibold">SSL encrypted</div>
            <div className="w-px h-4 bg-slate-600"></div>
            <div className="text-slate-500 font-semibold">Cancel anytime</div>
          </div>
        </div>
      </div>
    </section>
  )
}