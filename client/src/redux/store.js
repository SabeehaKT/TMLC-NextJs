import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { themeReducer } from "./reducers/themeReducer";
import { movieReducer } from "./reducers/movieReducer";

export const store = configureStore({
  reducer: {
    activeTheme: themeReducer,
    moviesData: movieReducer
  },
});