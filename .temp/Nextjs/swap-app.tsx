import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ArrowUpDown, Info, Settings } from 'lucide-react'

export default function SwapApp() {
  const [sliderValue, setSliderValue] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleSliderChange = (event: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
      setSliderValue(percentage)
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
  }, [])

  return (
    <div className="relative w-[1280px] h-[1181px] bg-[#000814] text-white font-['Neue_Montreal'] overflow-hidden">
      {/* Navigation */}
      <nav className="absolute left-1/2 top-9 -translate-x-1/2 flex items-center gap-3">
        <div className="flex items-center gap-15 px-6 py-2.5 border-2 border-white rounded-lg bg-[#204af8e5] shadow-[0_4px_0_0_#fff]">
          <Image src="/assets/small_logo.png" alt="Logo" width={74} height={28} />
          <div className="flex items-center gap-8">
            {['Home', 'Admin', 'Analytics', 'Guide', 'About'].map((item) => (
              <button key={item} className="flex items-center gap-1 cursor-pointer">
                <Image src={`/assets/${item.toLowerCase()}_logo.png`} alt={item} width={20} height={20} />
                <span className="text-base">{item}</span>
              </button>
            ))}
          </div>
        </div>
        <Image src="/assets/discord_logo.png" alt="Discord" width={67} height={54} className="cursor-pointer" />
      </nav>

      {/* Connect Wallet Button */}
      <button className="absolute right-24 top-10 px-4 py-3 border-[1.4px] border-white rounded-xl bg-black shadow-[0_2px_0_0_#fff]">
        <span className="font-medium">Connect wallet</span>
      </button>

      <div className="flex justify-center items-start pt-52 gap-8">
        {/* Analytics Section */}
        <div className="w-[503px] border-[1.3px] border-white rounded-md bg-white/10 shadow-[2.7px_2.7px_0_0_#fff] p-3.5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold font-['Dx_Dynamix-Free-Personal-Use']">Analytics</h2>
            <Image src="/assets/analyticsTooltip.png" alt="Info" width={19} height={18} />
          </div>
          <div className="h-[200px] border-[1.7px] border-white rounded-lg bg-[#171a35] shadow-[0_2px_0_0_#fff] mb-3 flex items-center justify-center">
            <span className="text-white/30 font-bold">No data available</span>
          </div>
          <div className="flex gap-1.5 mb-3">
            {[
              { title: 'Current price', icon: <ArrowUpDown className="w-5 h-5" /> },
              { title: 'TVL', icon: <Info className="w-5 h-5" /> },
              { title: '24H Volume', icon: <Settings className="w-5 h-5" /> },
            ].map((item, index) => (
              <div key={index} className="flex-1 p-4 border-[1.2px] border-white rounded bg-[#204af8] shadow-[3.3px_3.3px_0_0_#fff]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f6851b] border border-white flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm">{item.title}</p>
                    <p className="text-base font-bold">0</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="font-bold mb-2">Recent Trades</h3>
          <div className="border-[1.7px] border-white rounded-lg bg-[#f6851b2b] shadow-[3.5px_3.5px_0_0_#fff] p-3">
            <div className="flex justify-between text-sm">
              <span>Timestamp</span>
              <span>Token amount</span>
              <span>msToken amount</span>
            </div>
          </div>
        </div>

        {/* Trading Interface */}
        <div className="w-[616px] border-[1.7px] border-white rounded-md bg-white/10 shadow-[3.5px_3.5px_0_0_#fff] p-4">
          <div className="flex justify-between mb-4">
            <div className="flex gap-2">
              <button className="px-6 py-2 border-[1.3px] border-white rounded bg-[#1a3dca] shadow-[3.5px_3.5px_0_0_#fff]">
                Deposit
              </button>
              <button className="px-6 py-2">Withdraw</button>
            </div>
            <button className="px-4 py-2 border-[1.7px] border-white rounded bg-[#1a3dca] shadow-[0_2px_0_0_#fff] flex items-center gap-1">
              <Image src="/assets/setting.png" alt="Settings" width={25} height={26} />
              <span className="font-bold">Slippage: 0.5%</span>
            </button>
          </div>
          
          {/* Deposit Card */}
          <div className="border-[1.7px] border-white rounded-lg bg-[#171a35] shadow-[0_2px_0_0_#fff] p-4 mb-4">
            <div className="flex justify-between mb-3">
              <span className="font-bold">Deposit</span>
              <span className="font-bold">Asset Balance: 0.000 DOGE</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <input type="text" placeholder="0.00" className="bg-transparent text-3xl font-bold text-white/50 w-20" />
              <button className="px-4 py-2 border-[1.3px] border-white rounded bg-[#1a3dca] shadow-[3.5px_3.5px_0_0_#fff] flex items-center gap-1">
                <Image src="/assets/dogecoinDogeLogo2.png" alt="DOGE" width={22} height={22} />
                <span className="font-bold">DOGE</span>
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/90">$ 0</span>
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
              <span className="font-bold">ms DOGE Balance: 0.000 DOGE</span>
            </div>
            <div className="flex justify-between items-center">
              <input type="text" placeholder="0.00" className="bg-transparent text-3xl font-bold text-white/50 w-20" />
              <button className="px-4 py-2 border-[1.3px] border-white rounded bg-[#1a3dca] shadow-[3.5px_3.5px_0_0_#fff] flex items-center gap-1">
                <div className="relative w-5 h-5">
                  <Image src="/assets/ms_coin.png" alt="MS" layout="fill" objectFit="contain" />
                  <div className="absolute bottom-0 right-0 w-3 h-3">
                    <Image src="/assets/dogecoin_doge_logo.png" alt="DOGE" layout="fill" objectFit="contain" />
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

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex justify-between items-end">
        <div className="max-w-[530px]">
          <Image src="/assets/frame3.png" alt="Logo" width={139} height={57} className="mb-6" />
          <p className="text-white/50 text-sm">
            The ultimate platform for turning coins into long-term gains. 
            Stake, hold, and grow your assets with strategies designed for degen investors
          </p>
        </div>
        <div className="text-right">
          <h3 className="text-2xl font-bold mb-4">Product</h3>
          <p className="text-white/50 mb-2">About product</p>
          <p className="text-white/50 mb-2">Guide</p>
          <div className="flex items-center justify-end gap-1">
            <span className="text-white/50">Join Discord</span>
            <Image src="/assets/discord.png" alt="Discord" width={37} height={34} />
          </div>
        </div>
      </div>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        2024 @metaborong all rights reserved
      </p>

      {/* Background Elements */}
      <Image src="/assets/ellipse.png" alt="Ellipse" width={601} height={424} className="absolute left-[351px] top-[810px]" />
      <Image src="/assets/logo_tilted.png" alt="Logo" width={109} height={109} className="absolute left-[865px] top-[685px]" />
      <Image src="/assets/conlines.png" alt="Conlines" width={91} height={268} className="absolute left-[523px] top-[310px]" />
    </div>
  )
}