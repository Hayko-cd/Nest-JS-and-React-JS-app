import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExperimentService } from "store/experiments/service";

export const experimentsData = createAsyncThunk(
  "fetch/experiments",
  async (data, { rejectWithValue }) => {
    try {
      const response = await ExperimentService.experiments(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    cache: "no-store"
  }
);
