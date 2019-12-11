import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import "numeral/locales";

numeral.locale("pl");

export const TransactionsMax = ({ converter, transactions }) => {
  const max = transactions.reduce(
    (prev, current) => (prev.amount > current.amount ? prev : current),
    ""
  );
  const maxEuro = numeral(max.amount / 100).format("0.00");
  const maxPln = numeral((max.amount * converter) / 100).format("0.00 $");
  return (
    <div className="transactions-max">
      <h2 className="transactions-max__title">
        {" "}
        Transakcja o największej kwocie:
      </h2>
      <p className="transactions-max__transaction">
        {max
          ? `${max.description}: ${maxEuro} EURO (${maxPln}) `
          : "nie dodano jeszcze transakcji"}
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  converter: state.converter,
  transactions: state.transactions
});

export default connect(mapStateToProps, null)(TransactionsMax);
