import axios from "axios";

import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "./types";

export const addProduct = (product) => {
  return { type: ADD_PRODUCT, payload: product };
};

export const deleteProduct = (id) => {
  return { type: DELETE_PRODUCT, payload: id };
};

export const getStoreName = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get("http://localhost:3001/store");
      return dispatch({
        type: GET_STORE_NAME,
        payload: response.data.name,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
