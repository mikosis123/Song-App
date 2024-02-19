import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const songApi = createApi({
  reducerPath: "songApi",
  refetchOnFocus: true,
  tagTypes: ["song"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => ({
    getSong: builder.query<any, any>({
      query: () => {
        return { url: "get", method: "GET" };
      },
      providesTags: ["song"],
    }),
    createSong: builder.mutation<any, any>({
      query: (data) => {
        return { url: "save", method: "POST", body: data };
      },
      invalidatesTags: ["song"],
    }),
    updateSong: builder.mutation<any, any>({
      query: (data) => {
        return { url: "update/:id", method: "PUT", body: data };
      },
      invalidatesTags: ["song"],
    }),
    deleteSong: builder.mutation<any, string>({
      query: (id) => {
        return { url: "/delete/:id", method: "DELETE" };
      },
      invalidatesTags: ["song"],
    }),
  }),
});

export const {
  useGetSongQuery,
  useLazyGetSongQuery,
  useCreateSongMutation,
  useUpdateSongMutation,
  useDeleteSongMutation,
} = songApi;
