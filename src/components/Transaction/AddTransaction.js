import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTransaction } from "../../actions/transactionActions";
import classnames from "classnames";

export class AddTransaction extends Component {
  constructor() {
    super();
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    this.state = {
      transactionIdentifier: "",
      type: "Debit",
      amount: null,
      currDate: date,
      balance: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.OnTypeChange = this.OnTypeChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
      console.log(nextProps.errors);
    }
  }

  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   this.props.getTransaction(id, this.props.history);
  // }

  onChange(e) {
    let { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  }

  onSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      transactionIdentifier: this.state.transactionIdentifier,
      type: this.state.type,
      amount: this.state.amount,
      effectiveDate: this.state.effectiveDate
    };
    this.props.createTransaction(newTransaction, this.props.history);
    console.log(newTransaction.type.amount);
  }

  OnTypeChange(e) {
    let { value } = e.target;
    this.setState(() => ({
      type: value
    }));
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="transaction">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Create Transaction form
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <select
                      value={this.state.type}
                      onChange={this.OnTypeChange}
                    >
                      <option value="Debit">Debit</option>
                      <option value="Credit">Credit</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames(
                        "form-control form-control-lg ",
                        {
                          "is-invalid": errors.transactionAmount
                        },
                        { "is-invalid": errors.amount }
                      )}
                      placeholder="Amount value"
                      name="amount"
                      value={this.state.transactionAmount}
                      onChange={this.onChange}
                    />
                    {errors.transactionAmount && (
                      <div className="invalid-feedback">
                        {errors.transactionAmount}
                      </div>
                    )}
                    {errors.amount && (
                      <div className="invalid-feedback">{errors.amount}</div>
                    )}
                  </div>

                  <h6>Current day</h6>
                  <div className="form-group">{this.state.currDate}</div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddTransaction.propTypes = {
  createTransaction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createTransaction }
)(AddTransaction);
