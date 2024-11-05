import { useState } from 'react'
import { X, Search } from 'lucide-react'
import Image from 'next/image'

interface Token {
  name: string
  symbol: string
  icon: string
}

interface SelectTokenProps {
  onClose: () => void
  onSelectToken: (token: Token) => void
}

const tokens: Token[] = [
  { name: 'Dogecoin', symbol: 'DOGE', icon: '/assets/dogecoinDogeLogo2.png' },
  { name: 'Shiba Inu', symbol: 'SHIB', icon: '/assets/shibaInuShibLogo2.png' },
  { name: 'Pepe', symbol: 'PEPE', icon: '/assets/pepePepeLogo2.png' },
  { name: 'Bonk', symbol: 'BONK', icon: '/assets/bonk1BonkLogo2.png' },
  { name: 'FLOKI', symbol: 'FLOKI', icon: '/assets/flokiInuFlokiLogo1.png' },
]

export function SelectToken({ onClose, onSelectToken }: SelectTokenProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-[#000814] border-2 border-white rounded-lg w-[448px] p-6 shadow-[0_4px_0_0_#fff]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Image src="/assets/coinsSwap.png" alt="Coins" width={30} height={30} />
            <h2 className="text-xl font-bold font-['Dx_Dynamix-Free-Personal-Use']">Set a token</h2>
          </div>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search coins"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#ffffff0a] text-white rounded"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
        </div>
        <div className="space-y-4">
          {filteredTokens.map((token) => (
            <div
              key={token.symbol}
              className="flex items-center gap-3 cursor-pointer hover:bg-[#ffffff0a] p-2 rounded"
              onClick={() => onSelectToken(token)}
            >
              <Image src={token.icon} alt={token.name} width={36} height={36} />
              <span className="text-white text-lg">
                {token.name} ({token.symbol})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}