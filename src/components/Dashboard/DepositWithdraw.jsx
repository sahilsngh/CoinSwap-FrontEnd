import React from 'react';
import { ChevronDown, Info } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import './css/DepositWithdraw.css';

function DepositWithdraw() {
  return (
    <div className="deposit-withdraw">
      <div className="tabs">
        <button className="active-tab">Deposit</button>
        <button>Withdraw</button>
      </div>
      <div className="slippage">
        <span>Slippage: 0.5%</span>
      </div>
      <div className="deposit-section">
        <div className="balance">
          <span>Asset Balance: 0.000 DOGE</span>
          <div className="token-select">
            <img src="/placeholder.svg" alt="DOGE" />
            <span>DOGE</span>
            <ChevronDown size={18} />
          </div>
        </div>
        <input type="text" value="0.00" className="amount-input" />
        <span className="usd-value">$0</span>
        <input type="range" min="0" max="100" className="range-input" />
      </div>
      <div className="receive-section">
        <div className="balance">
          <span>ms DOGE Balance: 0.000 DOGE</span>
          <div className="token-select">
            <img src="/placeholder.svg" alt="ms DOGE" />
            <span>ms DOGE</span>
          </div>
        </div>
        <input type="text" value="0.00" className="amount-input" readOnly />
      </div>
      <div className="conversion-rate">
        1DOGE = 0.890 ms DOGE
      </div>
      <div className="fees">
        <Info size={18} />
        <span>Vault entry fees</span>
        <span>0.80%</span>
      </div>
      <div className="connect-button-wrapper">
        <ConnectButton />
      </div>
    </div>
  );
}

export default DepositWithdraw;