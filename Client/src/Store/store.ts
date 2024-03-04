// // store.ts
// import { configureStore } from "@reduxjs/toolkit";

// import songReducer from "../Features/Slicesong";
import { songApi } from "../Features/song.api";
import { uploadApi } from "../Features/upload.api";

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
    [uploadApi.reducerPath]: uploadApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songApi.middleware, uploadApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
