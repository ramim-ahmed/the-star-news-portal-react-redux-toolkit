import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./inititalState";
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
});

export default newsSlice.reducer;
