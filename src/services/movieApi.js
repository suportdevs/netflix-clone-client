import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        prepareHeaders: (headers, {getState}) => {
            const token = JSON.parse(localStorage.getItem('token'));
            if(token){
                headers.set('token', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => '/movies',
        }),
    }),
});

export const {useGetMoviesQuery} = movieApi;