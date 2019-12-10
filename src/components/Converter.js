import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchState, updateConverter } from "../store/actions/transactions";
import numeral from "numeral";
import "numeral/locales";

numeral.locale("pl");

export const Converter = ({ converter, fetchState, updateConverter }) => {
  useEffect(() => {
    if (localStorage.converter) fetchState("converter");
  }, []);

  const handleConverterChange = e => {
    const value = e.target.value;

    if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      updateConverter(value);
    } else if (value.match(/^\d{1,}(,\d{0,2})?$/)) {
      const parsedVal = value.replace(",", ".");
      updateConverter(parsedVal);
    }
  };

  return (
    <div className="converter">
      1 EURO ={" "}
      <input
        type="text"
        placeholder="wpisz wartość w zł"
        value={converter}
        min={0}
        onChange={e => handleConverterChange(e)}
        className="converter__input"
      />{" "}
      PLN
    </div>
  );
};

const mapStateToProps = state => ({
  converter: state.converter
});
const mapDispatchToProps = dispatch => ({
  fetchState: key => dispatch(fetchState(key)),
  updateConverter: value => dispatch(updateConverter(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
