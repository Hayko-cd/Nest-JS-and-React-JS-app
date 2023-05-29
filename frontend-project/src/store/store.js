import { configureStore } from "@reduxjs/toolkit";
import experimentSliceDataReducer from "store/experiments/slice"

export const store = configureStore({
  reducer: {
    experiments: experimentSliceDataReducer,
  }
});