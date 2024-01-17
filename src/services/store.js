import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { webApi } from "./webApi";
import { authApi } from "./authApi";

export const store = configureStore({
    reducer: {
        [webApi.reducerPath]: webApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(webApi.middleware).concat(authApi.middleware),
})

setupListeners(store.dispatch);