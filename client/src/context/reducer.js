import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  CHANGE_PAGE,
} from "./actions";

export const reducer = (state, action) => {
  if (action.type === CHANGE_PAGE) {
    return {
      ...state,
      pageNumber: action.payload,
    };
  }
  if (action.type === FETCH_DATA_BEGIN) {
    return {
      ...state,
      isLoading: true,
      message: "Loading",
    };
  }
  if (action.type === FETCH_DATA_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      message: "Fetch success",
      coinList: action.payload,
    };
  }
  if (action.type === FETCH_DATA_ERROR) {
    return {
      ...state,
      isLoading: true,
      message: "error fetching data. Refresh the page",
    };
  }
  return state;
};
