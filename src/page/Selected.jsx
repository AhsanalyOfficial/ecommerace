import React from "react";
import Select from "react-select";

export const MultiSelectDropdown = ({ options, selectedValues, onChange }) => {
  return (
    <Select
      options={options}
      value={selectedValues}
      isMulti
      onChange={onChange}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};
export const SingleSelectDropdown = ({ options, selectedValues, onChange }) => {
  return (
    <Select
      options={options}
      value={selectedValues}
      isMulti={false}
      onChange={onChange}
      className="basic-single-select"
      classNamePrefix="select"
    />
  );
};
