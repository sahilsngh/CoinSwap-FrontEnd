import React from "react";
import Transactions from "./Transactions";
import CoinSwap from "./CoinSwap";
import "./TransactionPage.css";

const TransactionPage = () => {
  return (
    <div className="transaction-page">
      <Transactions />
      <CoinSwap />
    </div>
  );
};

export default TransactionPage;