import { createSlice } from "@reduxjs/toolkit";

export const userOnboardSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    collaboratePreference: null,
  },
  reducers: {
    update: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { update } = userOnboardSlice.actions;

export default userOnboardSlice.reducer;
