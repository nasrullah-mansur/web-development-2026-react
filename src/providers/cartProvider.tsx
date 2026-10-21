import { useReducer, type ReactNode } from "react";
import { CartContext, CartDispatchContext } from "../contexts/cartContext";
import cartReducer from "../reducers/cartReducer";


export default function CartProvider({ children }: { children: ReactNode }) {

    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext value={cart}>
            <CartDispatchContext value={dispatch}>
                {children}
            </CartDispatchContext>
        </CartContext>
    )


}

