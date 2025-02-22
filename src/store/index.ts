import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducer";

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});