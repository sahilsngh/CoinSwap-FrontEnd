import React from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, getDefaultConfig, darkTheme } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import NavigationBar from './NavigationBar';
import DashboardPage from './DashboardPage';
// import TransactionPage from "./txns/TransactionPage"
import Footer from './Footer';
import './css/Dashboard.css';

// const YOUR_PROJECT_ID = process.env.PROJECT_KEY; --> Secret
const YOUR_PROJECT_ID = "ded048565877c3a9319197152c2e2cf0";


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

function Dashboard() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <div style={{backgroundImage: 'url("./bg.png")'}} className="dashboard">
            <NavigationBar />
            {/* <TransactionPage/> */}
            <DashboardPage />
            {/* <div className="launch-app-container">
              <button className="launch-app-button">
                <img src="/logo/launchapp.svg" alt="Launch App" className="launch-app-icon" width="500" height="600" />
                
              </button>
            </div> */}
            <Footer />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Dashboard;