import { configureStore } from "@reduxjs/toolkit";
import userSlide from "./slides/userSlide";
export const store = configureStore({
  reducer: {
    userSlide: userSlide
  }
});
