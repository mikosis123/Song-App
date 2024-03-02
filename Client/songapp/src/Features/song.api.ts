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

    updateSong: builder.mutation<any, { id: string; data: any }>({
      // Specify the types for id and data
      query: ({ id, data }) => ({
        // Destructure id and data from the argument
        url: `update/${id}`, // Use the id to construct the URL
        method: "PUT",
        body: data, // Pass the data as the body of the request
      }),
      invalidatesTags: ["song"],
    }),
    deleteSong: builder.mutation<any, string>({
      query: (id) => {
        return { url: `delete/${id}`, method: "DELETE" };
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
