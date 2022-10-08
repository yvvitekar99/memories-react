import { createSlice } from "@reduxjs/toolkit";

export const callSlice = createSlice({
  name: "counter",
  initialState: {
    isRender: true,
  },
  reducers: {
    setRender: (state, action) => {
      state.isRender = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRender } = callSlice.actions;

export default callSlice.reducer;
