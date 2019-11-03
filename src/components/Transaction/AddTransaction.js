import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTransaction } from "../../actions/transactionActions";
import classnames from "classnames";

export class AddTransaction extends Component {
  constructor() {
    super();

    this.state = {
      transactionIdentifier: "",
      type: ["Debit", "Credit"],
      amount: null,
      effectivedate: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

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
      effectivedate: this.state.effectivedate
    };
    this.props.createTransaction(newTransaction, this.props.history);
    console.log(newTransaction);
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        {
          //check name attribute input fields
          //create constructor
          //set state
          //set value on input fields
          //create onChange function
          //set onChange on each input field
          //bind on constructor
          //check state change in the react extension
        }
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
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.transactionIdentifier
                      })}
                      placeholder="Unique Transaction ID"
                      name="transactionIdentifier"
                      value={this.state.transactionIdentifier}
                      onChange={this.onChange}
                    />

                    {errors.transactionIdentifier && (
                      <div className="invalid-feedback">
                        {errors.transactionIdentifier}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.description
                      })}
                      placeholder="Transaction type"
                      name="type"
                      value={this.state.type}
                      onChange={this.onChange}
                    />
                    {errors.type && (
                      <div className="invalid-feedback">{errors.type}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.amount
                      })}
                      placeholder="Transaction type"
                      name="type"
                      value={this.state.amount}
                      onChange={this.onChange}
                    />
                    {errors.amount && (
                      <div className="invalid-feedback">{errors.amount}</div>
                    )}
                  </div>
                  <h6>Effective Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="effectivedate"
                      value={this.state.effectivedate}
                      onChange={this.onChange}
                    />
                  </div>

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
