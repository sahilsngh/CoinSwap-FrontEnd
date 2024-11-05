import { useState } from 'react'
import { X, Settings } from 'lucide-react'

interface SlippageProps {
  onClose: () => void
  onSetSlippage: (slippage: number) => void
}

export function Slippage({ onClose, onSetSlippage }: SlippageProps) {
  const [slippage, setSlippage] = useState<number>(0.5)
  const [transactionSpeed, setTransactionSpeed] = useState<'standard' | 'fast' | 'instant'>('standard')

  const handleSetSlippage = () => {
    onSetSlippage(slippage)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-[#000814] border-2 border-white rounded-lg w-[448px] p-6 shadow-[0_4px_0_0_#fff]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Settings className="w-6 h-6" />
            <h2 className="text-xl font-bold font-['Dx_Dynamix-Free-Personal-Use']">Slippage</h2>
          </div>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="mb-4">
          <div className="flex gap-2 mb-2">
            {[0.1, 0.5, 1].map((value) => (
              <button
                key={value}
                className={`px-4 py-2 rounded ${
                  slippage === value ? 'bg-[#204af8] text-white' : 'bg-[#ffffff1a] text-white'
                }`}
                onClick={() => setSlippage(value)}
              >
                {value}%
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="number"
              value={slippage}
              onChange={(e) => setSlippage(Number(e.target.value))}
              className="w-full px-4 py-2 bg-[#ffffff1a] text-white rounded"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">%</span>
          </div>
        </div>
        <p className="text-[#ffffff57] text-sm mb-4">
          *Use recommended slippage tolerance levels for optimal performance
        </p>
        <div className="border-t border-[#ffffff29] my-4"></div>
        <h3 className="font-bold mb-2">Transaction speed</h3>
        <div className="flex gap-2 mb-4">
          {['standard', 'fast', 'instant'].map((speed) => (
            <button
              key={speed}
              className={`px-4 py-2 rounded capitalize ${
                transactionSpeed === speed ? 'bg-[#204af8] text-white' : 'bg-[#ffffff1a] text-white'
              }`}
              onClick={() => setTransactionSpeed(speed as 'standard' | 'fast' | 'instant')}
            >
              {speed}
            </button>
          ))}
        </div>
        <button
          className="w-full py-3 bg-[#204af8] text-white rounded-lg font-medium border-2 border-white shadow-[0_2px_0_0_#fff]"
          onClick={handleSetSlippage}
        >
          Set Slippage
        </button>
      </div>
    </div>
  )
}