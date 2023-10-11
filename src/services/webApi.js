import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const webApi = createApi({
    reducerPath: 'webApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:500/'}),
    endpoints: (builder) => ({
        getLists: builder.query({
            query: (type, genre) => `lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`,
        }),
    }),
});

export const {useGetListsQuery} = webApi;