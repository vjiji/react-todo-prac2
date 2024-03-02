import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/counterSlice";

const tkStore = configureStore({
  reducer: { counter: counter },
});

export default tkStore;
