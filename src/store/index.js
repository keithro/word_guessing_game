import { configureStore } from "@reduxjs/toolkit";
import { inputReducer } from "./inputSlice";

export const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});

// inputReducer: actions: addLetter,
// row
