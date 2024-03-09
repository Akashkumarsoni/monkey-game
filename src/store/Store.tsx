import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../redux-tool/Slice";
export const store = configureStore({
  reducer: { memorygame: gameReducer },
});
