import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step1: {},
  step2: {},
  step3: {},
};

const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updateStep1(state, action) {
      state.step1 = action.payload;
    },
    updateStep2(state, action) {
      state.step2 = action.payload;
    },
    updateStep3(state, action) {
      state.step3 = action.payload;
    },
  },
});

export const { updateStep1, updateStep2, updateStep3 } = formSlice.actions;
export default formSlice.reducer;
