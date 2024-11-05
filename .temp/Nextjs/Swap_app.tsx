"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ArrowUpDown, Info, Settings } from 'lucide-react'
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

interface TradeHistory {
  timestamp: string
  tokenAmount: string
  msTokenAmount: string
}

interface AnalyticsData {
  currentPrice: number
  tvl: number
  volume24h: number
}

interface PriceData {
  date: string
  value: number
}

interface BalanceData {
  assetBalance: number;
  msDOGEBalance: number;
}

// Sample data - replace with actual API data
const samplePriceData: PriceData[] = [
  { date: 'Jan', value: 2000 },
  { date: 'Feb', value: 2200 },
  { date: 'Mar', value: 2100 },
  { date: 'Apr', value: 2400 },
  { date: 'May', value: 2000 },
  { date: 'June', value: 2500 },
  { date: 'July', value: 2300 },
]

export default function SwapApp() {
  // Analytics Dashboard State
  const [trades, setTrades] = useState<TradeHistory[]>([])
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    currentPrice: 1.1,
    tvl: 134.8,
    volume24h: 13.8
  })
  const [priceHistory, setPriceHistory] = useState<PriceData[]>(samplePriceData)

  // Swap App Component State
  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw'>('deposit')
  const [sliderValue, setSliderValue] = useState(0)
  const [balances, setBalances] = useState<BalanceData>({
    assetBalance: 0,
    msDOGEBalance: 0
  })
  const [depositAmount, setDepositAmount] = useState<string>('0.00')
  const [receiveAmount, setReceiveAmount] = useState<string>('0.00')
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleSliderChange = (event: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
      setSliderValue(percentage)
      setDepositAmount((balances.assetBalance * (percentage / 100)).toFixed(2))
    }
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (event.buttons === 1) {
        handleSliderChange(event as unknown as React.MouseEvent<HTMLDivElement>)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [balances.assetBalance])

  // Simulating balance update from backend
  useEffect(() => {
    const timer = setInterval(() => {
      setBalances(prev => ({
        assetBalance: prev.assetBalance + Math.random() * 0.1,
        msDOGEBalance: prev.msDOGEBalance + Math.random() * 0.1
      }))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center items-start gap-8 p-8 bg-[#000814] min-h-screen text-white font-['Neue_Montreal']">
      {/* Analytics Dashboard */}
      <div className="w-[503px] border-[1.3px] border-white rounded-md bg-white/10 shadow-[2.7px_2.7px_0_0_#fff] p-3.5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold font-['Dx_Dynamix-Free-Personal-Use']">Analytics</h2>
          <Image src="/assets/analyticsTooltip.png" alt="Info" width={19} height={18} />
        </div>

        {/* Price Chart */}
        <div className="h-[200px] border-[1.7px] border-white rounded-lg bg-[#171a35] shadow-[0_2px_0_0_#fff] mb-3 p-4">
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceHistory} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis 
                  dataKey="date" 
                  stroke="#ffffff60"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#ffffff60"
                  fontSize={12}
                  tickFormatter={(value) => `$${value/1000}K`}
                />
                <Tooltip content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-[#171a35] border border-white/20 p-2 rounded-lg shadow-lg">
                        <p className="text-white text-sm">${payload[0].value}</p>
                      </div>
                    )
                  }
                  return null
                }} />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#204af8" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        {/* Analytics Cards */}
        <div className="flex gap-1.5 mb-3">
          <Card className="flex-1 p-4 border-[1.2px] border-white rounded bg-[#204af8] shadow-[3.3px_3.3px_0_0_#fff]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f6851b] border border-white flex items-center justify-center">
                <ArrowUpDown className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm">Current price</p>
                <p className="text-base font-bold">{analyticsData.currentPrice} DOGE</p>
              </div>
            </div>
          </Card>
          <Card className="flex-1 p-4 border-[1.2px] border-white rounded bg-[#204af8] shadow-[3.3px_3.3px_0_0_#fff]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f6851b] border border-white flex items-center justify-center">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm">TVL</p>
                <p className="text-base font-bold">{analyticsData.tvl} M</p>
              </div>
            </div>
          </Card>
          <Card className="flex-1 p-4 border-[1.2px] border-white rounded bg-[#204af8] shadow-[3.3px_3.3px_0_0_#fff]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f6851b] border border-white flex items-center justify-center">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm">24H Volume</p>
                <p className="text-base font-bold">{analyticsData.volume24h} M</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Trades */}
        <h3 className="font-bold mb-2">Recent Trades</h3>
        <div className="border-[1.7px] border-white rounded-lg bg-[#f6851b2b] shadow-[3.5px_3.5px_0_0_#fff] p-3">
          <div className="flex justify-between text-sm mb-2">
            <span>Timestamp</span>
            <span>Token amount</span>
            <span>msToken amount</span>
          </div>
          <div className="space-y-2">
            {trades.length > 0 ? (
              trades.map((trade, index) => (
                <div key={index} className="flex justify-between text-sm text-white/80">
                  <span>{trade.timestamp}</span>
                  <span>{trade.tokenAmount}</span>
                  <span>{trade.msTokenAmount}</span>
                </div>
              ))
            ) : (
              <div className="text-center text-sm text-white/50 py-2">No trades yet</div>
            )}
          </div>
        </div>
      </div>

      {/* Swap App Component */}
      <div className="w-[616px] border-[1.7px] border-white rounded-md bg-white/10 shadow-[3.5px_3.5px_0_0_#fff] p-4">
        <div className="flex justify-between mb-4">
          <div className="flex gap-2">
            <button
              className={`px-6 py-2 border-[1.3px] border-white rounded ${
                activeTab === 'deposit' ? 'bg-[#1a3dca] shadow-[3.5px_3.5px_0_0_#fff]' : ''
              }`}
              onClick={() => setActiveTab('deposit')}
            >
              Deposit
            </button>
            <button
              className={`px-6 py-2 border-[1.3px] border-white rounded ${
                activeTab === 'withdraw' ? 'bg-[#1a3dca] shadow-[3.5px_3.5px_0_0_#fff]' : ''
              }`}
              onClick={() => setActiveTab('withdraw')}
            >
              Withdraw
            </button>
          </div>
          <button className="px-4 py-2 border-[1.7px] border-white rounded bg-[#1a3dca] shadow-[0_2px_0_0_#fff] flex items-center gap-1">
            <Image src="/assets/setting.png" alt="Settings" width={25} height={26} />
            <span className="font-bold">Slippage: 0.5%</span>
          </button>
        </div>
        
        {/* Deposit Card */}
        <div className="border-[1.7px] border-white rounded-lg bg-[#171a35] shadow-[0_2px_0_0_#fff] p-4 mb-4">
          <div className="flex justify-between mb-3">
            <span className="font-bold">{activeTab === 'deposit' ? 'Deposit' : 'Withdraw'}</span>
            <span className="font-bold">Asset Balance: {balances.assetBalance.toFixed(3)} DOGE</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <input
              type="text"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              className="bg-transparent text-3xl font-bold text-white/50 w-20"
            />
            <button className="px-4 py-2 border-[1.3px] border-white rounded bg-[#1a3dca] shadow-[3.5px_3.5px_0_0_#fff] flex items-center gap-1">
              <Image src="/assets/dogecoinDogeLogo2.png" alt="DOGE" width={22} height={22} />
              <span className="font-bold">DOGE</span>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/90">$ {(parseFloat(depositAmount) * 0.1).toFixed(2)}</span>
            <div className="relative w-[170px] h-[30px]" ref={sliderRef} onMouseDown={handleSliderChange}>
              <div className="absolute inset-0 flex items-center">
                <div className="h-2 w-full bg-white/10 rounded border border-white"></div>
              </div>
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full cursor-pointer"
                style={{ left: `calc(${sliderValue}% - 8px)` }}
              ></div>
              <div className="absolute inset-y-0 left-0 flex items-center justify-between w-full px-2">
                {['min', '25%', '75%', 'max'].map((label, index) => (
                  <span key={index} className="text-[10px] font-bold">{label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Receive Card */}
        <div className="border-[1.7px] border-white rounded-lg bg-[#171a35] shadow-[0_2px_0_0_#fff] p-4 mb-4">
          <div className="flex justify-between mb-3">
            <span className="font-bold">Receive</span>
            <span className="font-bold">ms DOGE Balance: {balances.msDOGEBalance.toFixed(3)} DOGE</span>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              value={receiveAmount}
              onChange={(e) => setReceiveAmount(e.target.value)}
              className="bg-transparent text-3xl font-bold text-white/50 w-20"
            />
            <button className="px-4 py-2 border-[1.3px] border-white rounded bg-[#1a3dca] shadow-[3.5px_3.5px_0_0_#fff] flex items-center gap-1">
              <div className="relative w-5 h-5">
                <Image src="/assets/ms_coin.png" alt="MS"   width={20} height={20} />
                <div className="absolute bottom-0 right-0 w-3 h-3">
                  <Image src="/assets/dogecoin_doge_logo.png" alt="DOGE" width={12} height={12} />
                </div>
              </div>
              <span className="font-bold">ms DOGE</span>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span className="text-sm">Vault entry fees</span>
          </div>
          <span className="text-sm">0.80%</span>
        </div>

        <button className="w-full py-3 border-[1.7px] border-white rounded-xl bg-black shadow-[0_2px_0_0_#fff] font-medium">
          Connect wallet
        </button>
      </div>
    </div>
  )
}