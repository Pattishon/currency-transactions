import {
  Actions,
  addTransaction,
  deleteTransaction,
  fetchState,
  updateConverter
} from "../../../store/actions/transactions";
import { transaction } from "../../fixtures/transactions";

test("should generate updateConverter action", () => {
  const action = updateConverter(3);
  expect(action).toEqual({
    type: Actions.UPDATE_CONVERTER,
    payload: 3
  });
});

test("should generate addTransaction action", () => {
  const action = addTransaction(transaction);
  expect(action).toEqual({
    type: Actions.ADD_TRANSACTION,
    transaction
  });
});

test("should generate deleteTransaction action", () => {
  const action = deleteTransaction(transaction.id);
  expect(action).toEqual({
    type: Actions.DELETE_TRANSACTION,
    id: transaction.id
  });
});

test("should generate fetchState action", () => {
  const action = fetchState("key");

  expect(action).toEqual({
    type: Actions.FETCH_STATE,
    key: "key",
    value: null
  });
});
