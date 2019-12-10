import React from "react";
import { shallow } from "enzyme";
import { TransactionsSum } from "../../components/TransactionsSum";
import { transactions } from "../fixtures/transactions";

test("should render Main correctly", () => {
  const wrapper = shallow(
    <TransactionsSum converter={2} transactions={transactions} />
  );
  expect(wrapper).toMatchSnapshot();
});
