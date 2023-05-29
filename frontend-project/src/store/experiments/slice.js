import { createSlice } from "@reduxjs/toolkit";
import { experimentsData } from "store/experiments/actions";
import { REDUX_STATES } from "utils/constants";

const initialState = {
  experimentStatus: null,
  data: [],
  error: null,
  errors: "",
  errorMessage: "",
  is_loading: false
};

export const experimentSliceData = createSlice({
  name: "experiments",
  initialState,
  reducers: {
    resetStatus: (state, action) => {
      switch (action.payload) {
        case "experimentStatus":
          state.experimentStatus = null;
          break;
        default:
          break;
      }
    }
  },

  extraReducers: {
    [experimentsData.pending]: (state) => {
      state.errors = null;
      state.errorMessage = "";
      state.is_loading = false;
      state.experimentStatus = REDUX_STATES.PENDING;
    },
    [experimentsData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.is_loading = false;
      state.experimentStatus = REDUX_STATES.SUCCEEDED;
    },
    [experimentsData.rejected]: (state, { payload }) => {
      state.is_loading = false;
      state.experimentStatus = REDUX_STATES.FAILED;
      if (payload.status === 422) {
        state.errors = payload.data?.errors;
      } else {
        state.errorMessage = payload.data.message;
      }
    }
  }
});


export const { resetStatus } = experimentSliceData.actions;

export default experimentSliceData.reducer;