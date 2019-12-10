import React from "react";
import { shallow } from "enzyme";
import { Converter } from "../../components/Converter";

let wrapper, fetchState, updateConverter;
beforeEach(() => {
  fetchState = jest.fn();
  updateConverter = jest.fn();
  wrapper = shallow(
    <Converter
      fetchState={fetchState}
      converter={2}
      updateConverter={updateConverter}
    />
  );
});

test("should render Converter correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should set converter on input change", () => {
  const value = "5";
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });
  expect(updateConverter).toHaveBeenLastCalledWith(value);
});
