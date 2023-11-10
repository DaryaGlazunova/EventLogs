import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEventLogs, Status } from "./types";
import { fetchLogs } from "./asyncActions";
import { getLogsFromLS } from "../../utils/local-storage";

export interface IntefaceProductState {
  items: IEventLogs[];
  page: number;
  status: Status;
}

const dataFromLS = getLogsFromLS();
const startPage = dataFromLS.length;

const initialState: IntefaceProductState = {
  items: dataFromLS,
  page: startPage,
  status: Status.LOADING,
};

export const LogsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogs.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchLogs.fulfilled,
      (state, action: PayloadAction<IEventLogs[]>) => {
        action.payload.forEach((item) => {
          state.items.unshift(item);
        });
        state.status = Status.SUCCESS;
      }
    );

    builder.addCase(fetchLogs.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export const { setItems, setPage } = LogsSlice.actions;

export default LogsSlice.reducer;
