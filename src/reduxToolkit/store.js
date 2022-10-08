import { configureStore } from "@reduxjs/toolkit";
import callSlice from "./callSlice";

export default configureStore({
  reducer: {
    callRedux: callSlice,
  },
});
