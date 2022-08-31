import { configureStore } from "@reduxjs/toolkit";
import userOnboardReducer from "../redux/reducers/userOnboardSlice";

export default configureStore({
  reducer: {
    user: userOnboardReducer,
  },
});
