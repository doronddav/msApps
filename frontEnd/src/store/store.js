import { configureStore } from "@reduxjs/toolkit";

import DataReducer from "./features/dataSlice";

export const store = configureStore({
  reducer: {
    data: DataReducer,
  },
});
