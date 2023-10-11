import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { webApi } from "./webApi";

export const store = configureStore({
    reducer: {
        [webApi.reducerPath]: webApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(webApi.middleware),
})

setupListeners(store.dispatch);