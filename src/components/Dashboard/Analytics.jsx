import React from 'react';
import { Info, DollarSign, TrendingUp, BarChart2 } from 'lucide-react';
import './css/Analytics.css';

function Analytics() {
  return (
    <div className="analytics">
      <div className="header">
        <h2>Analytics</h2>
        <Info size={18} />
      </div>
      <div className="graph">
        <p>No data available</p>
      </div>
      <div className="metrics">
        <div className="metric">
          <DollarSign size={24} />
          <div>
            <h3>Current price</h3>
            <p>0</p>
          </div>
        </div>
        <div className="metric">
          <TrendingUp size={24} />
          <div>
            <h3>TVL</h3>
            <p>0</p>
          </div>
        </div>
        <div className="metric">
          <BarChart2 size={24} />
          <div>
            <h3>24H Volume</h3>
            <p>0</p>
          </div>
        </div>
      </div>
      <div className="recent-trades">
        <h3>Recent Trades</h3>
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Token amount</th>
              <th>msToken amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Analytics;