import React from "react";
import { shallow } from "enzyme";
import { AddTransaction } from "../../components/AddTransaction";

let addTransactionSpy, wrapper;
beforeEach(() => {
  addTransactionSpy = jest.fn();
  wrapper = shallow(
    <AddTransaction addTransaction={addTransactionSpy} converter={2} />
  );
});

test("should render AddTransaction correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render error paragraph for invalid data", () => {
  expect(wrapper.find("p").length).toBe(1);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.find("p").length).toBe(2);
});

test("should set transaction name on input change", () => {
  const value = "changed transaction name";
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });
  expect(
    wrapper
      .find("input")
      .at(0)
      .prop("value")
  ).toBe(value);
});

test("should set amount on input change", () => {
  const value = "10";
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(
    wrapper
      .find("input")
      .at(1)
      .prop("value")
  ).toBe(value);
});
test("should not set amount if invalid input", () => {
  const value = "10.1234";
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(
    wrapper
      .find("input")
      .at(1)
      .prop("value")
  ).toBe("");
});
