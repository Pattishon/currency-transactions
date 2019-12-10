import React from "react";
import AddTransaction from "./AddTransaction";
import Converter from "./Converter";
import TransactionsList from "./TransactionsList";
import TransactionsSum from "./TransactionsSum";
import TransactionsMax from "./TransactionsMax";

const Main = () => {
  return (
    <div className="app">
      <h1 className="title">Transakcje walutowe</h1>
      <div className="transactions">
        <div>
          <Converter />
          <AddTransaction />
          <TransactionsList />
          <TransactionsSum />
        </div>
        <TransactionsMax />
      </div>
    </div>
  );
};

export default Main;
