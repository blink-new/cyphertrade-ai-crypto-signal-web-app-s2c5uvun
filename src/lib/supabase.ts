import { createClient } from '@supabase/supabase-js'

// These values are automatically provided by our environment
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://neccxhapcpntznlkxmzh.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Profile {
  id: string
  email: string
  subscription_tier: 'free' | 'pro'
  subscription_status: 'active' | 'canceled' | 'past_due'
  stripe_customer_id?: string
  created_at: string
  updated_at: string
}

export interface CryptoSignal {
  id: string
  symbol: string
  name: string
  price: number
  change_24h: number
  signal: 'buy' | 'sell' | 'hold'
  confidence: number
  reasoning?: string
  created_at: string
}