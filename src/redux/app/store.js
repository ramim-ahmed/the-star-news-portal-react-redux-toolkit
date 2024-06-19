import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});

export default store;
