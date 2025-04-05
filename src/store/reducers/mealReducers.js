import {
    FETCH_MEALS_REQUEST,
    FETCH_MEALS_SUCCESS,
    FETCH_MEALS_FAILURE,
  } from "../actionTypes/mealActionType";
  
  const initialState = {
    meals: [],
    loading: false,
    error: null,
  };
  
  const mealReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MEALS_REQUEST:
        return { ...state, loading: true, error: null };
  
      case FETCH_MEALS_SUCCESS:
        return { ...state, loading: false, meals: action.payload };
  
      case FETCH_MEALS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default mealReducer;
  