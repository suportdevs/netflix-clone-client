import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const webApi = createApi({
    reducerPath: 'webApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        prepareHeaders: (headers, { getState }) => {
            // Get the token from your state
            // const token = cookies.get('token');
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWQ5NzgyNWU5ZjQ5OTVlOGJiYWViNCIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwNDk5NTY3NiwiZXhwIjoxNzA1MDgyMDc2fQ.5e7tT4BU9hXtP-Rtg6VK8JyEV-oeCCPpECVHT_N81S0';
            if (token) {
              headers.set('token', `Bearer ${token}`);
            }
            return headers;
          },
    }),
    endpoints: (builder) => ({
        getLists: builder.query({
            query: (type, genre) => `lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`,
        }),
        getMovie: builder.query({
            query: (id) => `movies/find/${id}`,
        }),
    }),
});

export const {useGetListsQuery, useGetMovieQuery} = webApi;
