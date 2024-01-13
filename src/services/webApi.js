import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const webApi = createApi({
    reducerPath: 'webApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        prepareHeaders: (headers, { getState }) => {
            // Get the token from your state
            // const token = cookies.get('token');
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWQ5NzgyNWU5ZjQ5OTVlOGJiYWViNCIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwNTE2ODY3MSwiZXhwIjoxNzA1MjU1MDcxfQ.1sftXQjQxNVMVnvZ1nOmI59KgwUTNLiznWbyDm8MIy8';
            if (token) {
              headers.set('token', `Bearer ${token}`);
            }
            return headers;
          },
    }),
    endpoints: (builder) => ({
        getLists: builder.query({
            query: ({type, genre}) => 
           ( console.log(type, genre),
            `lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`),
        }),
        getMovie: builder.query({
            query: (id) => `movies/find/${id}`,
        }),
        getRandomMovie: builder.query({
            query: (type) => `movies/random${type ? '?type=' + type : ''}`,
        })
    }),
});

export const {useGetListsQuery, useGetMovieQuery, useGetRandomMovieQuery} = webApi;
