import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteTransaction, fetchState } from "../store/actions/transactions";
import numeral from "numeral";
import "numeral/locales";

numeral.locale("pl");

export const TransactionsList = ({
  converter,
  fetchState,
  transactions,
  deleteTransaction
}) => {
  useEffect(() => {
    if (localStorage.transactions) fetchState("transactions");
  }, []);

  const handleDelete = id => {
    deleteTransaction(id);
  };

  return (
    <div className="transactions-list">
      <h2 className="transactions-list__title">Lista wszystkich transakcji</h2>
      {transactions.length > 0 ? (
        <ul className="transactions-list__list">
          {transactions.map(transaction => (
            <li key={transaction.id} className="transactions-list__list-item">
              <p>
                <span className="transactions-list__description">
                  {transaction.description}:{" "}
                </span>
                {numeral(transaction.amount / 100).format("0.00")} EURO (
                {numeral((transaction.amount * converter) / 100).format(
                  "0.00 $"
                )}
                )
              </p>
              <div>
                <button
                  onClick={() => handleDelete(transaction.id)}
                  className="button button--transactions-list"
                >
                  Usuń transakcję
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Brak zapisanych transakcji.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  converter: state.converter,
  transactions: state.transactions
});
const mapDispatchToProps = dispatch => ({
  deleteTransaction: id => dispatch(deleteTransaction(id)),
  fetchState: key => dispatch(fetchState(key))
});
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
