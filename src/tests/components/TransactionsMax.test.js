import React from "react";
import { shallow } from "enzyme";
import { TransactionsMax } from "../../components/TransactionsMax";
import { transactions } from "../fixtures/transactions";

test("should render Main correctly", () => {
  const wrapper = shallow(
    <TransactionsMax converter={2} transactions={transactions} />
  );
  expect(wrapper).toMatchSnapshot();
});
