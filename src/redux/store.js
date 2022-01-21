import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import dataReducer from "./dataSlice";
export default configureStore({
  reducer: {
    theme: themeReducer,
    data: dataReducer,
  },
});
 