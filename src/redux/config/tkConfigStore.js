import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/counterSlice";
import todos from "../modules/todosSlice";

const tkStore = configureStore({
  reducer: { counter: counter, todos: todos },
});

export default tkStore;
