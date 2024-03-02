import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addId: (state) => state + 1,
  },
});

export const { addId } = counterSlice.actions;
export default counterSlice.reducer;
