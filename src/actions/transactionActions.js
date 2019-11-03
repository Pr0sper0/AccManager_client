import axios from "axios";
import { GET_ERRORS, GET_TRANSACTIONS, GET_TRANSACTION } from "./types";

export const createTransaction = (transaction, history) => async dispatch => {
  try {
    //const res =
    await axios.post("/api/transaction", transaction);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getTransactions = () => async dispatch => {
  const res = await axios("/api/transaction/all");
  //history.push("/dashboard");
  dispatch({
    type: GET_TRANSACTIONS,
    payload: res.data
  });
};

export const getTransaction = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/transaction/${id}`);
    dispatch({
      type: GET_TRANSACTION,
      payload: res.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};
