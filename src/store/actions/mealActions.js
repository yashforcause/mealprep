import {
    FETCH_MEALS_REQUEST,
    FETCH_MEALS_SUCCESS,
    FETCH_MEALS_FAILURE,
  } from "../actionTypes/mealActionType";
  import mealsData from "../../data/meals.json"; // Import local JSON data
  
  // Action creator to fetch meals

  export const fetchMeals = () => async (dispatch) => {
    dispatch({ type: FETCH_MEALS_REQUEST });
  
    try {
      const response = await fetch("http://localhost:5000/meals");
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      dispatch({ type: FETCH_MEALS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_MEALS_FAILURE, payload: error.message });
    }
  };
  
//   export const fetchMeals = () => async (dispatch) => {
//     dispatch({ type: FETCH_MEALS_REQUEST });
  
//     try {
//       // Instead of an API call, return local JSON data
//       dispatch({ type: FETCH_MEALS_SUCCESS, payload: mealsData });
//     } catch (error) {
//       dispatch({ type: FETCH_MEALS_FAILURE, payload: error.message });
//     }
//   };
  