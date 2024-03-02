import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //
    addTodos: (state, action) => {
      console.log(action, "addTodos action");
      return [...state, action.payload];
    },
  },
});

export const { addTodos } = todosSlice.actions;
export default todosSlice.reducer;
