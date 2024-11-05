import Image from 'next/image'

export default function Component() {
  return (
    <div className="relative w-[1280px] h-[1460px] flex flex-col items-start bg-[#000814] overflow-hidden">
      {/* Navigation */}
      <nav className="absolute left-1/2 top-9 -translate-x-1/2 flex items-center gap-3">
        <div className="flex items-center gap-[60px] px-[26px] py-[10px] border-2 border-white rounded-lg bg-[#204af8e5] shadow-[0_4px_0_0_#fff] overflow-hidden">
          <Image src="/assets/small_logo.png" alt="Small Logo" width={74} height={28} />
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-1">
              <Image src="/assets/home_logo.png" alt="Home" width={20} height={20} />
              <span className="text-white text-[16px] font-['Neue_Montreal']">Home</span>
            </button>
            <button className="flex items-center gap-1">
              <Image src="/assets/admin_logo.png" alt="Admin" width={21} height={20} />
              <span className="text-white text-[16px] font-['Neue_Montreal']">Admin</span>
            </button>
            <button className="flex items-center gap-1">
              <Image src="/assets/analytics_logo.png" alt="Analytics" width={21} height={20} />
              <span className="text-white text-[16px] font-['Neue_Montreal']">Analytics</span>
            </button>
            <button className="flex items-center gap-1">
              <Image src="/assets/guide_logo.png" alt="Guide" width={20} height={20} />
              <span className="text-white text-[16px] font-['Neue_Montreal']">Guide</span>
            </button>
            <button className="flex items-center gap-1">
              <Image src="/assets/about_logo.png" alt="About" width={20} height={20} />
              <span className="text-white text-[16px] font-['Neue_Montreal']">About</span>
            </button>
          </div>
        </div>
        <Image src="/assets/discord_logo.png" alt="Discord" width={67} height={54} className="cursor-pointer" />
      </nav>

      {/* Main Content */}
      <div className="absolute left-[310px] top-[207px]">
        <Image src="/assets/holding.png" alt="Holding" width={250} height={77} />
      </div>
      <h2 className="absolute left-1/2 top-[288px] -translate-x-1/2 text-[#ffffff63] text-[48px] font-bold font-['Awesome_Serif']">
        It Is A
      </h2>
      <div className="absolute top-[300px] left-[625px]">
        <Image src="/assets/strategy.png" alt="Strategy" width={223} height={52} />
      </div>
      <button className="absolute left-[498px] top-[383px] cursor-pointer">
        <Image src="/assets/launch_app.png" alt="Launch App" width={302} height={54} />
      </button>

      {/* Logo */}
      <div className="absolute left-[569px] top-[658px]">
        <Image src="/assets/logo.png" alt="Logo" width={143} height={143} />
      </div>

      {/* Footer Content */}
      <div className="absolute left-[48px] top-[1171px] w-[531px] flex flex-col items-start gap-[26px]">
        <Image src="/assets/frame14372530341.png" alt="Frame" width={139} height={57} />
        <p className="text-[#ffffff80] text-[16px] font-['Neue_Montreal']">
          The Ultimate Platform For Turning C
          <br />
          Text Block 2
        </p>
      </div>

      <div className="absolute left-[1089px] top-[1179px] w-[130px] flex flex-col gap-[17px]">
        <h3 className="text-white text-[24px] font-bold font-['Dx_Dynamix-Free-Personal-Use']">Product</h3>
        <p className="text-[#ffffff85] text-[20px] font-['Neue_Montreal']">About Product</p>
        <p className="text-[#ffffff85] text-[20px] font-['Neue_Montreal']">Guide</p>
        <div className="flex items-center gap-1">
          <span className="text-[#ffffff85] text-[20px] font-['Neue_Montreal']">Join Discord</span>
          <Image src="/assets/discord.png" alt="Discord" width={37} height={34} />
        </div>
      </div>

      <p className="absolute left-1/2 top-[1345px] -translate-x-1/2 text-[#fff9] text-[16px] font-['Neue_Montreal']">
        metaborong
      </p>

      {/* Background Elements */}
      <div className="absolute left-[349px] top-[1036px]">
        <Image src="/assets/ellipse.png" alt="Ellipse" width={601} height={424} />
      </div>
    </div>
  )
}