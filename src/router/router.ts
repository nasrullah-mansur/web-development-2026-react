import RootLayout from "@/components/layout/RootLayout";
import Cart from "@/pages/cart/Cart";
import Home from "@/pages/home/Home";
import Users from "@/pages/users/Users";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/users",
                Component: Users,
            },
            {
                path: "/cart",
                Component: Cart
            }
        ]
    }
]);