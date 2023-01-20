import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { commentsApi, userApi } from "store/services";
import { counterSlice } from "store/slice";

export const store = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(commentsApi.middleware),

});

setupListeners(store.dispatch); //todo Понять зачем

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
