import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const uploadApi = createApi({
  reducerPath: "uploadApi",
  refetchOnFocus: true,
  tagTypes: ["song"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getSong: builder.query<any, any>({
      query: () => {
        return { url: "get", method: "GET" };
      },
    }),
    createSong: builder.mutation<any, any>({
      query: (data) => {
        return { url: "save", method: "POST", body: data };
      },
    }),

    uploadSong: builder.mutation<any, any>({
      query: (data) => {
        return { url: "uploadAudio", method: "POST", body: data };
      },
    }),

    updateSong: builder.mutation<any, { id: string; data: any }>({
      // Specify the types for id and data
      query: ({ id, data }) => ({
        // Destructure id and data from the argument
        url: `update/${id}`, // Use the id to construct the URL
        method: "PUT",
        body: data, // Pass the data as the body of the request
      }),
    }),
    deleteSong: builder.mutation<any, string>({
      query: (id) => {
        return { url: `delete/${id}`, method: "DELETE" };
      },
    }),
  }),
});

export const {
  useGetSongQuery,
  useLazyGetSongQuery,
  useCreateSongMutation,
  useUploadSongMutation,
  useUpdateSongMutation,
  useDeleteSongMutation,
} = uploadApi;
