import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Slice";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
