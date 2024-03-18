import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload || 1; // Agar argument berilmagan bo'lsa, 1 bilan oshiriladi
    },
    decrement: (state) => {
      state.value = Math.max(state.value - 1, 1);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
