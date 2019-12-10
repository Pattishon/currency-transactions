import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { addTransaction } from "../store/actions/transactions";
import numeral from "numeral";
import "numeral/locales";

numeral.locale("pl");

export const AddTransaction = ({ addTransaction, converter }) => {
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
    setError("");
  };

  const handleAmountChange = e => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
      setError("");
    } else if (amount.match(/^\d{1,}(,\d{0,2})?$/)) {
      const parsedAmount = amount.replace(",", ".");
      setAmount(parsedAmount);
      setError("");
    }
  };

  const handleAddTransaction = e => {
    e.preventDefault();
    if (!amount || !description) {
      setError("Proszę podać nazwę transakcji i wartość w Euro");
    } else {
      const newTransaction = {
        id: uuid(),
        description,
        amount: parseFloat(amount, 10) * 100
      };

      setError("");
      setDescription("");
      setAmount("");
      addTransaction(newTransaction);
    }
  };

  return (
    <div className="add-transaction">
      <h2 className="add-transaction__title">Dodaj nową transakcję</h2>
      <form onSubmit={handleAddTransaction}>
        {error ? <p className="add-transaction__error">{error}</p> : ""}
        <div>
          <label>
            Nazwa transakcji
            <input
              type="text"
              placeholder="nazwa transakcji"
              value={description}
              onChange={handleDescriptionChange}
              className="add-transaction__field"
            />
          </label>
        </div>
        <div>
          <label>
            Wartość w EURO:{" "}
            <input
              type="text"
              placeholder="wartość w EURO"
              value={amount}
              min="1"
              onChange={handleAmountChange}
              className="add-transaction__field"
            />
          </label>
        </div>
        <p>
          Wartość w PLN:{" "}
          {amount ? numeral(amount * converter).format("0.00") : "-"}
        </p>
        <button type="submit" className="button button--add">
          Dodaj transakcję
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  converter: state.converter,
  transactions: state.transactions
});

const mapDispatchToProps = dispatch => ({
  addTransaction: transaction => dispatch(addTransaction(transaction))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
