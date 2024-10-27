import React from 'react';
import Analytics from './Analytics';
import DepositWithdraw from './DepositWithdraw';
import './css/DashboardPage.css';

function DashboardPage() {
  return (
    <main style = {{backgroundColor: 'rgba(52, 52, 52, 0.1)'}} className="dashboard-page">
      <Analytics />
      <DepositWithdraw />
    </main>
  );
}

export default DashboardPage;