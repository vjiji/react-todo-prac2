import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      return [...state, action.payload];
    },
    updateTodos: (state, action) => {
      return [
        ...state.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      ];
    },
    deleteTodos: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addTodos, updateTodos, deleteTodos } = todosSlice.actions;
export default todosSlice.reducer;
