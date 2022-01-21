import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    update: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { update } = dataSlice.actions;
export default dataSlice.reducer;
