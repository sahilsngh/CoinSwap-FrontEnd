import React, { useState } from "react";
import "./CoinSwap.css";

const CoinSwap = () => {
  const [deposit, setDeposit] = useState(0);
  const [receive, setReceive] = useState(0);

  const handleConnectWallet = () => {
    console.log("Connect Wallet clicked");
  };

  return (
    <div className="coin-swap">
      <div className="header">
        <button className="tab active">Deposit</button>
        <button className="tab">Withdraw</button>
        <div className="slippage">
          <span>Slippage:</span>
          <span>0.5%</span>
        </div>
      </div>

      <div className="content">
        <div className="deposit-section">
          <div className="balance-info">
            <div className="balance-title">Deposit</div>
            <div className="balance-value">{deposit.toFixed(2)}</div>
            <div className="balance-currency">$ {deposit.toFixed(2)}</div>
          </div>
          <div className="asset-balance">
            <div className="balance-label">Asset Balance: 0.000 DOGE</div>
            <select className="asset-select">
              <option value="DOGE">DOGE</option>
            </select>
            <div className="slider">
              <input type="range" min="0" max="100" step="25" />
            </div>
          </div>
        </div>

        <div className="receive-section">
          <div className="balance-info">
            <div className="balance-title">Receive</div>
            <div className="balance-value">{receive.toFixed(2)}</div>
            <div className="conversion-rate">1 DOGE = 0.890 ms DOGE</div>
          </div>
          <div className="ms-doge-balance">
            <div className="balance-label">ms DOGE Balance: 0.000 ms DOGE</div>
            <select className="asset-select">
              <option value="msDOGE">ms DOGE</option>
            </select>
          </div>
        </div>

        <div className="vault-fees">
          <span>Vault entry fees</span>
          <span>0.80%</span>
        </div>

        <button className="connect-wallet" onClick={handleConnectWallet}>
          Connect Wallet
        </button>
      </div>

      <div className="logo">
        <img src="path/to/logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default CoinSwap;
