import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types";

const initialState = {
  list: [],
};

export default rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, list: [...state.list, payload] };
      break;
    case DELETE_PRODUCT:
      return {
        ...state,
        list: [...state.list.filter((element) => element.id !== payload)],
      };
      break;

    default:
      return state;
      break;
  }
};
