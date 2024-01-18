import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { webApi } from "./webApi";
import { authApi } from "./authApi";
import authSlice from "./AuthSlice";

export const store = configureStore({
    reducer: {
        [webApi.reducerPath]: webApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        user: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(webApi.middleware).concat(authApi.middleware),
})

setupListeners(store.dispatch);