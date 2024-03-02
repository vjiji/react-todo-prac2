import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //
  },
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;
