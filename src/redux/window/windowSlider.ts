import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getWindowSize } from "../../utils/get-window-width";

export interface IntefaceWindowState {
  breakPointMobile: number;
  windowWidth: number;
}

const initialState: IntefaceWindowState = {
  breakPointMobile: 840,
  windowWidth: getWindowSize(),
};

export const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    setWindowWidth(state, action: PayloadAction<number>) {
      state.windowWidth = action.payload;
    },
  },
});

export const { setWindowWidth } = windowSlice.actions;

export default windowSlice.reducer;
