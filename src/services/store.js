import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { webApi } from "./webApi";
import { authApi } from "./authApi";
import authSlice from "./AuthSlice";
import { movieApi } from "./movieApi";
import movieSlice from "./movieSlice";

export const store = configureStore({
    reducer: {
        [webApi.reducerPath]: webApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
        user: authSlice.reducer,
        movie: movieSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(webApi.middleware).concat(authApi.middleware).concat(movieApi.middleware),
})

setupListeners(store.dispatch);