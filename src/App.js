import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
//redux related imports
import store from "./store";
import withdraw from "./actions";

class App extends Component {
  onSubmit = (e) => {
    const amt = e.target.dataset.amount;
    // console.log("Amount to withdraw is: ", amt);
    // update state via redux
    store.dispatch(withdraw(amt));
  };

  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={this.onSubmit} data-amount="10000">
            WITHDRAW $10,000
          </button>
          <button onClick={this.onSubmit} data-amount="5000">
            WITHDRAW $5,000
          </button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
