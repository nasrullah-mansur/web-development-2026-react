import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export default function useCart() {
    const dispatch = useContext(CartContext);


    return dispatch;

}


