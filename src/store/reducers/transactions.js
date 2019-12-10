import { Actions } from "../actions/transactions";

const transactionDefaultState = {
  converter: 1,
  transactions: []
};

export default (state = transactionDefaultState, action) => {
  switch (action.type) {
    case Actions.FETCH_STATE:
      return { ...state, [action.key]: action.value };
    case Actions.UPDATE_CONVERTER:
      return {
        ...state,
        converter: action.payload
      };
    case Actions.ADD_TRANSACTION:
      localStorage.setItem(
        "transactions",
        JSON.stringify([...state.transactions, action.transaction])
      );
      return {
        ...state,
        transactions: [...state.transactions, action.transaction]
      };
    case Actions.DELETE_TRANSACTION:
      const filteredTransactions = state.transactions.filter(transaction => {
        return transaction.id !== action.id;
      });
      localStorage.setItem(
        "transactions",
        JSON.stringify(filteredTransactions)
      );
      return { ...state, transactions: filteredTransactions };
    default:
      return state;
  }
};
