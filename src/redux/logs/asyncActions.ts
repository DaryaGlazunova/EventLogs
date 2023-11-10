import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IEventLogs } from "./types";
import { changeDateFormat } from "../../utils/datetime";
const serverPath = "https://jsonplaceholder.typicode.com/todos";

export const fetchLogs = createAsyncThunk<IEventLogs[], number>(
  "logs/fetchLogs",
  async (page) => {
    let { data } = await axios.get<IEventLogs[]>(
      `${serverPath}?_limit=20&_page=${page}`
    );

    return data.map((obj) => {
      obj["date"] = changeDateFormat(new Date());
      obj["completed"] = false;
      return obj;
    });
  }
);
