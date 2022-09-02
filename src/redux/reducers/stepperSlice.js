import { createSlice } from "@reduxjs/toolkit";

export const stepperSlice = createSlice({
  name: "stepper",
  initialState: {
    activeStep: 1,
  },
  reducers: {
    increment: (state) => {
      state.activeStep += 1;
    },
    decrement: (state) => {
      state.activeStep -= 1;
    },
  },
});

export const { increment, decrement } = stepperSlice.actions;

export default stepperSlice.reducer;
