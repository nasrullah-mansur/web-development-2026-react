/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAppDispatch } from '@/redux/hooks';
import { removeFromCart, updateQuantity } from '@/redux/modules/cart/cartSlice';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartItem({ cart }: { cart: any }) {

    const dispatch = useAppDispatch();


    const handleQuantity = (type: "increment" | 'decrement') => {
        dispatch(updateQuantity({
            id: cart.productId,
            type,
        }))
    }


    return (
        <Card

            className="gap-0 overflow-hidden rounded-2xl py-0 shadow-sm"
        >
            <CardContent className="p-4 sm:p-5">
                <div className="flex gap-4 sm:gap-6">

                    {/* cart Image */}
                    <div className="flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-muted/50 sm:size-32">
                        <img
                            src={cart.images[0]}
                            alt={cart.title}
                            className="size-full object-contain p-2"
                        />
                    </div>

                    {/* cart Details */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">

                        <div className="flex items-start justify-between gap-3">
                            <div className="space-y-2">
                                <span

                                    className="capitalize"
                                >
                                    {cart.category}
                                </span>

                                <h3 className="line-clamp-2 text-base font-semibold sm:text-lg">
                                    {cart.title}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    ${cart.price.toFixed(2)} each
                                </p>
                            </div>

                            {/* Remove Button - UI Only */}
                            <Button
                                onClick={() => dispatch(removeFromCart(cart.id))}
                                variant="ghost"
                                size="icon"
                                className="shrink-0 text-muted-foreground hover:text-destructive"
                                aria-label="Remove cart"
                            >
                                <Trash2 className="size-4" />
                            </Button>
                        </div>

                        {/* Quantity and Total */}
                        <div className="flex flex-wrap items-center justify-between gap-3">

                            {/* Quantity Controls */}
                            <div className="flex h-10 items-center overflow-hidden rounded-lg border">
                                <Button
                                    onClick={() => handleQuantity('decrement')}
                                    variant="ghost"
                                    size="icon"
                                    className="size-10 rounded-none"
                                    aria-label="Decrease quantity"
                                >
                                    <Minus className="size-4" />
                                </Button>

                                <span className="flex w-10 items-center justify-center text-sm font-semibold">
                                    {cart.quantity}
                                </span>

                                <Button
                                    onClick={() => handleQuantity('increment')}
                                    variant="ghost"
                                    size="icon"
                                    className="size-10 rounded-none"
                                    aria-label="Increase quantity"
                                >
                                    <Plus className="size-4" />
                                </Button>
                            </div>

                            {/* cart Total */}
                            <p className="text-lg font-bold">
                                $
                                {(
                                    cart.price * cart.quantity
                                ).toFixed(2)}
                            </p>
                        </div>

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
