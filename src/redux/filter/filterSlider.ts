import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilterMatchMode } from "primereact/api";

export interface IntefaceFilterState {
  searchValue: string;
  matchMode: FilterMatchMode.CONTAINS;
}

const initialState: IntefaceFilterState = {
  searchValue: "",
  matchMode: FilterMatchMode.CONTAINS,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
