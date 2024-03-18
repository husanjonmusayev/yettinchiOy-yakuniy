import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const counterSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isLogin: (state) => {
      state.value = true;
    },
    isLogout: (state) => {
      state.value = false;
    },
  },
});


export const { isLogin, isLogout } = counterSlice.actions;

export default counterSlice.reducer;
