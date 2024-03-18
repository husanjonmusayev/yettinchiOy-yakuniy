import { configureStore } from "@reduxjs/toolkit";
import Islogin from "./login.js";
import Shoop from "./shopping.js";
import Count from "./counter.js";

export const store = configureStore({
  reducer: {
    login: Islogin,
    shoping: Shoop,
    counter: Count,
  },
});
