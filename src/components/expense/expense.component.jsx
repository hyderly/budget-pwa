import React, { useState } from "react";
import { connect } from "react-redux";

import { addExpense } from "../../redux/actions";

import "../form.styles.scss";

const Expense = ({ addExpense }) => {
  const [value, setValue] = useState("");
  const [des, setDes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ value: value, description: des });
    setValue("");
    setDes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <input
          required
          className="expense"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Expense"
        />
        <input
          required
          type="text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          placeholder="Enter description"
        />
      </div>

      <button className="expense-btn">Add</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (item) => dispatch(addExpense(item)),
});

export default connect(null, mapDispatchToProps)(Expense);
