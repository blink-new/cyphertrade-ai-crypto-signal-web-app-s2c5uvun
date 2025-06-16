import { useEffect, useState } from 'react'
import { supabase, CryptoSignal } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'

export function useCryptoData() {
  const { profile } = useAuth()
  const [signals, setSignals] = useState<CryptoSignal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchCryptoData()
    
    // Set up real-time subscription for signal updates
    const subscription = supabase
      .channel('crypto_signals_changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'crypto_signals' },
        (payload) => {
          // Add new signal to the beginning of the list
          setSignals(prev => [payload.new as CryptoSignal, ...prev.slice(0, 99)])
        }
      )
      .subscribe()

    // Refresh data every 5 minutes for free users, every minute for pro users
    const interval = setInterval(
      fetchCryptoData,
      profile?.subscription_tier === 'pro' ? 60000 : 300000
    )

    return () => {
      subscription.unsubscribe()
      clearInterval(interval)
    }
  }, [profile?.subscription_tier])

  const fetchCryptoData = async () => {
    try {
      setLoading(true)
      
      // For free users, only get top 5. For pro users, get top 100
      const limit = profile?.subscription_tier === 'pro' ? 100 : 5
      
      // Get the latest signals
      const { data, error } = await supabase
        .from('crypto_signals')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error

      // Group by symbol and get the latest signal for each
      const latestSignals = data.reduce((acc: CryptoSignal[], signal) => {
        const existingIndex = acc.findIndex(s => s.symbol === signal.symbol)
        if (existingIndex === -1) {
          acc.push(signal)
        }
        return acc
      }, [])

      setSignals(latestSignals.slice(0, limit))
      setError(null)
    } catch (err) {
      console.error('Error fetching crypto data:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch crypto data')
    } finally {
      setLoading(false)
    }
  }

  const refreshData = async () => {
    // Call our edge function to get fresh data
    try {
      const { data, error } = await supabase.functions.invoke('fetch-crypto-data')
      if (error) throw error
      
      // The function will update the database, which will trigger our subscription
      console.log('Crypto data refreshed:', data)
    } catch (err) {
      console.error('Error refreshing crypto data:', err)
    }
  }

  return { signals, loading, error, refreshData }
}