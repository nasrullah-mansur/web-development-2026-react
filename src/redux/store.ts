import cartSlice from "@/redux/modules/cart/cartSlice";
import userSlice from "@/redux/modules/users/userSlice";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        users: userSlice,
        cart: cartSlice
    }
})

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store