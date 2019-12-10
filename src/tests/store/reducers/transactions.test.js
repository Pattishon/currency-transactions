import { Actions } from "../../../store/actions/transactions";
import transactionsReducer from "../../../store/reducers/transactions";
import { transaction } from "../../fixtures/transactions";

const testStore = {
  converter: 2,
  transactions: [
    { id: "123-id", description: "nowa transakcja", amount: 10.5 },
    { id: "456-id", description: "transakcja druga", amount: 32 }
  ]
};

test("should return default transactions state", () => {
  const state = transactionsReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    converter: 1,
    transactions: []
  });
});

test("should change converter value", () => {
  const action = { type: Actions.UPDATE_CONVERTER, payload: 2 };
  const state = transactionsReducer(testStore, action);
  expect(state).toEqual({ ...testStore, converter: 2 });
});

test("should add new transaction", () => {
  const action = { type: Actions.ADD_TRANSACTION, transaction };
  const store = transactionsReducer(testStore, action);
  expect(store.transactions).toEqual([...testStore.transactions, transaction]);
});

test("should delete transaction", () => {
  const action = {
    type: Actions.DELETE_TRANSACTION,
    id: testStore.transactions[0].id
  };
  const store = transactionsReducer(testStore, action);
  expect(store.transactions).toEqual([testStore.transactions[1]]);
});
