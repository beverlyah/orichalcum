import { CHANGE_PRODUCT } from "../actions/types";

const productIdReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case CHANGE_PRODUCT:
      return payload;
    default:
      return state;
  }
}

export default productIdReducer;
