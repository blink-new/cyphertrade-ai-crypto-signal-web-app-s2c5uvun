import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// List of top cryptocurrencies to track
const TOP_CRYPTOS = ['bitcoin', 'ethereum', 'solana', 'cardano', 'polkadot'];

// Signal generation logic (simplified for demo)
function generateSignal(change24h: number): { signal: 'buy' | 'sell' | 'hold', confidence: number, reasoning: string } {
  const confidence = Math.floor(Math.random() * 30) + 70; // 70-100
  
  if (change24h > 5) {
    return {
      signal: 'buy',
      confidence: Math.min(confidence + 10, 100),
      reasoning: 'Strong upward momentum detected'
    };
  } else if (change24h < -5) {
    return {
      signal: 'sell',
      confidence: Math.min(confidence + 10, 100),
      reasoning: 'Significant downward pressure'
    };
  } else if (change24h > 2) {
    return {
      signal: 'buy',
      confidence,
      reasoning: 'Positive trend continuation likely'
    };
  } else if (change24h < -2) {
    return {
      signal: 'sell',
      confidence,
      reasoning: 'Bearish sentiment prevailing'
    };
  } else {
    return {
      signal: 'hold',
      confidence: confidence - 10,
      reasoning: 'Market consolidation phase'
    };
  }
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch crypto data from CoinGecko
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${TOP_CRYPTOS.join(',')}&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch crypto data');
    }

    const cryptoData = await response.json();

    // Process and store signals
    const signals = cryptoData.map((crypto: {
      symbol: string;
      name: string;
      current_price: number;
      price_change_percentage_24h: number;
      total_volume: number;
      market_cap: number;
    }) => {
      const { signal, confidence, reasoning } = generateSignal(
        crypto.price_change_percentage_24h
      );

      return {
        symbol: crypto.symbol.toUpperCase(),
        name: crypto.name,
        price: crypto.current_price,
        change_24h: crypto.price_change_percentage_24h,
        signal,
        confidence,
        reasoning,
        volume_24h: `$${(crypto.total_volume / 1e9).toFixed(2)}B`,
        market_cap: `$${(crypto.market_cap / 1e9).toFixed(2)}B`,
      };
    });

    // Store signals in database
    const { error } = await supabase
      .from('crypto_signals')
      .insert(signals);

    if (error) {
      console.error('Error storing signals:', error);
      throw error;
    }

    return new Response(
      JSON.stringify({
        success: true,
        signals,
        timestamp: new Date().toISOString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in fetch-crypto-data function:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});