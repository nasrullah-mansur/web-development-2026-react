import type { ICart } from "@/types/cart";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: ICart = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string | number>) => {
            const productId = action.payload;
            const cartExist = state.find(
                (item) => item.productId === productId
            );

            // Update Quantity;
            if (cartExist) {
                cartExist.quantity += 1;
            }

            // Add new item;
            else {
                state.push({
                    id: crypto.randomUUID(),
                    productId,
                    quantity: 1,
                });
            }
        },

        removeFromCart: (state, action: PayloadAction<string | number>) => {
            return state.filter(item => item.id !== action.payload);
        },

        updateQuantity: (state, action: PayloadAction<{
            id: number | string;
            type: "increment" | "decrement";
        }>) => {
            const productId = action.payload.id;

            const cartExist = state.find(
                (item) => item.productId === productId
            );
            console.log(productId, cartExist);

            if (cartExist) {
                if (action.payload.type === "increment") {
                    cartExist.quantity += 1;
                } else {
                    cartExist.quantity -= 1;
                }
            }
        },

        clearCart: () => {
            return []
        },
    },
});

export default cartSlice.reducer;

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
} = cartSlice.actions;