import { baseApi } from "@/redux/api/baseApi";
import { loggerMiddleware } from "@/redux/middleware/loggerMiddleware";
import cartSlice from "@/redux/modules/cart/cartSlice";
import todoSlice from "@/redux/modules/todo/todoSlice";
import userSlice from "@/redux/modules/users/userSlice";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        users: userSlice,
        cart: cartSlice,
        todo: todoSlice,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(loggerMiddleware, baseApi.middleware)
})

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store