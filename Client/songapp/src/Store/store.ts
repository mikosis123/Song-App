// // store.ts
// import { configureStore } from "@reduxjs/toolkit";

// import songReducer from "../Features/Slicesong";
import { songApi } from "../Features/song.api";

// export const store = configureStore({
//   reducer: {
//     song: songReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
// import { songApi } from "../Features/song.api";

// const { reducers, middleware } =/ songApi;

export const store = configureStore({
  reducer: {
    [songApi.reducerPath]: songApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([songApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
