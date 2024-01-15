import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const webApi = createApi({
    reducerPath: 'webApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        prepareHeaders: (headers, { getState }) => {
            // Get the token from your state
            // const token = cookies.get('token');
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWQ5NzgyNWU5ZjQ5OTVlOGJiYWViNCIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwNTM0Mjc1NywiZXhwIjoxNzA1NDI5MTU3fQ.n5ISuT7o_LA_8mCml5-n3nImYW17i-Q7uufk2j4ft6g';
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
        }),
        getUserStats: builder.query({
            query: () => `users/stats`,
        }),
        getUsers: builder.query({
            query: () => `users`,
        }),
    }),
});

export const {useGetListsQuery, useGetMovieQuery, useGetRandomMovieQuery, useGetUserStatsQuery, useGetUsersQuery} = webApi;
