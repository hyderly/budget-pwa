import React, { useState } from "react";
import { connect } from "react-redux";

import { addIncome } from "../../redux/actions";

import "../form.styles.scss";

const Income = ({ addIncome }) => {
  const [value, setValue] = useState("");
  const [des, setDes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome({ value: value, description: des });
    setValue("");
    setDes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <input
          required
          className="income"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Income"
        />
        <input
          required
          type="text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          placeholder="Enter description"
        />
      </div>

      <button className="income-btn">Add</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addIncome: (item) => dispatch(addIncome(item)),
});

export default connect(null, mapDispatchToProps)(Income);
