import React from "react";
import { Link } from "react-router-dom";

const CreateTransaction = () => {
  return (
    <React.Fragment>
      <Link to="/addTransaction" className="btn btn-lg btn-info">
        Create a Transaction
      </Link>
    </React.Fragment>
  );
};

export default CreateTransaction;
