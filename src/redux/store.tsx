import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter/filterSlider";
import windowReducer from "./window/windowSlider";
import logsReducer from "./logs/logsSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    logs: logsReducer,
    window: windowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
