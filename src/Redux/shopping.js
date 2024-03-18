import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("products", serializedState);
  } catch (error) {
    console.error(error);
  }
};

// const caunt = useSelector((state) => state.counter.value);

// console.log(15, caunt);

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("products");
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    console.error(error);
  }
  return initialState;
};

const initialState = {
  value: [],
  totalAmount: 0,
};

const calculateTotalAmount = (state) => {
  return state.value.reduce((total, item) => {
    const price = parseFloat(item.Price.slice(1));
    return total + price * item.quantity;
  }, 0);
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: loadFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.value.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }

      saveToLocalStorage(state);

      state.totalAmount = calculateTotalAmount(state);
    },

    removeItem: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        state.value.splice(itemIndex, 1);
      }

      saveToLocalStorage(state);

      state.totalAmount = calculateTotalAmount(state);
    },

    updateQuantity: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1 && action.payload.quantity > 0) {
        state.value[itemIndex].quantity = action.payload.quantity;
      }

      saveToLocalStorage(state);

      state.totalAmount = calculateTotalAmount(state);
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
