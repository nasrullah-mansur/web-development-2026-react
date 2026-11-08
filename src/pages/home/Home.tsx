import Products from "@/pages/home/Products";
import { useAppSelector } from "@/redux/hooks";

export default function Home() {

    const cart = useAppSelector((store) => store.cart);

    console.log(cart);



    return (
        <>
            {cart.length}
            <Products />
        </>
    )
}
