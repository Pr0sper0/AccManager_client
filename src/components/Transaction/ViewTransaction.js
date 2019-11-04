import React, { Component } from "react";
import {
  getTransaction,
  createTransaction
} from "../../actions/transactionActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";

class ViewTransaction extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      transactionIdentifier: "",
      type: "",
      amount: "",
      effectiveDate: "",
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      transactionIdentifier,
      type,
      amount,
      effectiveDate
    } = nextProps.transaction;
    this.setState({
      id,
      transactionIdentifier,
      type,
      amount,
      effectiveDate
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getTransaction(id, this.props.history);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { errors } = this.state;
    const type = this.state.type;
    return (
      <div className="transaction">
        <div className="transaction">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Create Transaction form
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group bg-primary">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.transactionIdentifier
                      })}
                      placeholder="Unique Transaction ID"
                      name="transactionIdentifier"
                      value={this.state.transactionIdentifier}
                      disabled
                    />
                  </div>
                  <h6>Transaction type</h6>
                  <div className="form-group">
                    <span
                      className={
                        "card card-body " +
                        (type === "Debit" ? "bg-primary" : "bg-warning") +
                        " mb-3"
                      }
                    >
                      {this.state.type}
                    </span>
                  </div>
                  <h6>Transaction amount</h6>
                  <div className="form-group">
                    <span
                      className="input-group-text bg-success"
                      placeholder="Transaction amount"
                      name="type"
                      disabled
                    >
                      {this.state.amount}
                    </span>
                  </div>
                  <h6>Transaction Date</h6>
                  <div className="form-group">
                    <span
                      className="input-group-text bg-success"
                      type="date"
                      name="effectiveDate"
                      disabled
                    >
                      {this.state.effectiveDate}
                    </span>
                  </div>
                  <Link to="/Dashboard" className="btn btn-lg btn-info">
                    Return to dashboard
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ViewTransaction.propTypes = {
  getTransaction: PropTypes.func.isRequired,
  createTransaction: PropTypes.func.isRequired,
  transaction: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  transaction: state.transaction.transaction,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getTransaction, createTransaction }
)(ViewTransaction);
