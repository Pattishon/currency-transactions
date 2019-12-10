import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import "numeral/locales";

numeral.locale("pl");

export const TransactionsSum = ({ converter, transactions }) => {
  const total = transactions.reduce((a, b) => a + (b.amount || 0), 0);
  const totalEuro = numeral(total / 100).format("0.00");
  const totalPln = numeral((total * converter) / 100).format("0.00 $");
  return (
    <div className="transactions-sum">
      <h2 className="transactions-sum-title">Suma wszystkich transakcji:</h2>{" "}
      {totalEuro} EURO ({totalPln})
    </div>
  );
};

const mapStateToProps = state => ({
  converter: state.converter,
  transactions: state.transactions
});

export default connect(mapStateToProps, null)(TransactionsSum);
