import React, { Component } from "react";
import { Link } from "react-router-dom";

class TransactionItem extends Component {
  render() {
    const { transaction } = this.props;
    const type = this.props.transaction.type;
    return (
      <div className="container">
        {/* Set coloring to different account type*/}
        <div
          className={
            "card card-body " +
            (type === "Debit" ? "bg-primary" : "bg-warning") +
            " mb-3"
          }
        >
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{transaction.type}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              Amount: <h3>{transaction.amount}</h3>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <Link
                  to={`/viewTransaction/${transaction.transactionIdentifier}`}
                >
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1"> View Transaction Info</i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionItem;
