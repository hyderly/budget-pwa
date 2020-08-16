import React from "react";
import Expense from "../components/expense/expense.component";
import Income from "../components//income/income.component";

import "./homepage.styles.scss";

const Home = () => (
  <div className="home">
    <h1 className="home-title">Manage Your Budegt</h1>
    <div className="home-box">
      <div className="home-box__data">
        <div className="home-box__data--1">
          <h2 className="total-text">Total: $00</h2>
        </div>
        <div className="home-box__data--2">
          <h2 className="home-box__data--expense income-text">Income: +$00 </h2>
          <h2 className="home-box__data--income expense-text">
            Expense: -$00{" "}
          </h2>
        </div>
      </div>
      <div className="home-box__user">
        <Expense />
        <Income />
      </div>
    </div>
  </div>
);

export default Home;
