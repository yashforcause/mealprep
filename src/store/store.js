import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "../store/reducers/mealReducers";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    meals: mealReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;