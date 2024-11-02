import React from "react";
import "./Transactions.css";

const Transactions = () => {
  return (
    <div className="transactions">
      <div className="header">
        <span>Transactions</span>
        <button className="info-button">ℹ️</button>
      </div>

      <div className="chart-section">
        <div className="no-data">No data available</div>
      </div>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-icon">📈</div>
          <div className="stat-text">Current price</div>
          <div className="stat-value">0</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">💰</div>
          <div className="stat-text">TVL</div>
          <div className="stat-value">0</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">⏳</div>
          <div className="stat-text">24H Volume</div>
          <div className="stat-value">0</div>
        </div>
      </div>

      <div className="recent-trades">
        <div className="recent-trades-header">Recent Trades</div>
        <table className="trades-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Token amount</th>
              <th>msToken amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3" className="no-data">No data available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
