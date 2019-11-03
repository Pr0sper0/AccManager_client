import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class TransactionItem extends Component {
  render() {
    const { transaction } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">
                {transaction.transactionIdentifier}
              </span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{transaction.transactionName}</h3>
              <p>{transaction.description}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <Link>
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1">
                      {" "}
                      Transaction Board{" "}
                    </i>
                  </li>
                </Link>
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
