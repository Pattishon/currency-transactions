import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./styles/styles.scss";
import Main from "./components/Main";
import transactionsReducer from "./store/reducers/transactions";

export const convert = (euro, converter) => {
  return Math.round(parseFloat(euro, 10) * 100 * converter) / 100;
};

const store = createStore(transactionsReducer);
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
