import React from "react";
import { shallow } from "enzyme";
import { TransactionsList } from "../../components/TransactionsList";

let wrapper, fetchState, deleteTransaction;

beforeEach(() => {
  fetchState = jest.fn();
  deleteTransaction = jest.fn();
  wrapper = shallow(
    <TransactionsList
      fetchState={fetchState}
      converter={2}
      transactions={[{ id: "123", description: "test", amount: 200 }]}
      deleteTransaction={deleteTransaction}
    />
  );
});

test("should render TransactionsList correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should call deleteTransaction on input change", () => {
  wrapper
    .find("button")
    .at(0)
    .simulate("click");
  expect(deleteTransaction).toHaveBeenLastCalledWith("123");
});
