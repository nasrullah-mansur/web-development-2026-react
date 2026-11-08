
import {
    ArrowLeft,
    ShoppingBag
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { products } from "@/data/products";
import CartItem from "@/pages/cart/CartItem";
import OrderSummery from "@/pages/cart/OrderSummery";
import { useAppSelector } from "@/redux/hooks";

// Demo cart data - UI only


export default function Cart() {
    // const cartItems = useAppSelector(store => store.cart);

    const cart = useAppSelector(store => store.cart);

    const updateCarts = cart.map((cart) => {

        const getProduct = products.find(item => item.id === cart.productId);

        return {

            ...cart,
            title: getProduct?.title,
            category: getProduct?.category,
            price: getProduct?.price,
            images: getProduct?.images,
        }

    })


    const cartItems = updateCarts






    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-10">
                    <Badge
                        variant="secondary"
                        className="mb-4 rounded-full px-3 py-1"
                    >
                        <ShoppingBag className="mr-1 size-3.5" />
                        Your Shopping Bag
                    </Badge>

                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Shopping Cart
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Review your selected products before checkout.
                    </p>
                </div>

                {/* Cart Layout */}
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

                    {/* Cart Items */}
                    <div className="space-y-5 lg:col-span-2">

                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">
                                Cart Items
                                <span className="ml-2 text-muted-foreground">
                                    ({cartItems.length})
                                </span>
                            </h2>

                            <span className="text-sm text-muted-foreground">
                                {12} total items
                            </span>
                        </div>

                        {cartItems.map((cart) => (
                            <CartItem key={cart.id} cart={cart} />
                        ))}

                        {/* Continue Shopping - UI Only */}
                        <Button
                            variant="outline"
                            className="rounded-xl"
                        >
                            <ArrowLeft className="mr-2 size-4" />
                            Continue Shopping
                        </Button>
                    </div>

                    {/* Order Summary */}
                    <OrderSummery />
                </div>

            </div>
        </main>
    );
}
