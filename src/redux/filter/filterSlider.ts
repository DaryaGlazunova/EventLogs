import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IntefaceFilterState {
  searchValue: string;
  onlyUnread: boolean;
}

const initialState: IntefaceFilterState = {
  searchValue: "",
  onlyUnread: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setOnlyUnread(state) {
      state.onlyUnread = !state.onlyUnread;
    },
  },
});

export const { setSearchValue, setOnlyUnread } = filterSlice.actions;

export default filterSlice.reducer;
