import { configureStore } from "@reduxjs/toolkit";
import userOnboardReducer from "../redux/reducers/userOnboardSlice";
import stepperReducer from "../redux/reducers/stepperSlice";

export default configureStore({
  reducer: {
    user: userOnboardReducer,
    stepper: stepperReducer,
  },
});
