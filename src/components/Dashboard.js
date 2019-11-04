import React, { Component } from "react";
import TransactionItem from "./Transaction/TransactionItem";
import CreateTransactionButton from "./Transaction/CreateTransactionButton";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactionActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const { transactions } = this.props.transaction;
    return (
      <div className="transactions">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Transactions</h1>
              <br />
              <CreateTransactionButton />

              <br />
              <hr />
              {transactions.map(transaction => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  transaction: PropTypes.object.isRequired,
  getTransactions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  transaction: state.transaction
});

export default connect(
  mapStateToProps,
  { getTransactions }
)(Dashboard);
