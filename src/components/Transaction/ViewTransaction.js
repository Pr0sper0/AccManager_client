import React, { Component } from "react";
import {
  getTransaction,
  createTransaction
} from "../../actions/transactionActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class ViewTransaction extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      transactionName: "",
      transactionIdentifier: "",
      description: "",
      start_date: "",
      end_date: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      transactionName,
      transactionIdentifier,
      description,
      start_date,
      end_date
    } = nextProps.transaction;
    this.setState({
      id,
      transactionName,
      transactionIdentifier,
      description,
      start_date,
      end_date
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getTransaction(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const updateTransaction = {
      id: this.state.id,
      transactionName: this.state.transactionName,
      transactionIdentifier: this.state.transactionIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date
    };

    this.props.createTransaction(updateTransaction, this.props.history);
    console.log(updateTransaction);
  }

  render() {
    const { errors } = this.state;
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
                      disabled
                    />
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
                      disabled
                    />

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
                      disabled
                    />
                  </div>
                  <h6>Effective Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="effectivedate"
                      value={this.state.effectivedate}
                      onChange={this.onChange}
                      disabled
                    />
                  </div>
                </form>
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
