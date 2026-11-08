import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useAppDispatch } from '@/redux/hooks'
import { addToCart } from '@/redux/modules/cart/cartSlice'
import type { IProduct } from '@/types/product'
import { ShoppingCart, Star } from 'lucide-react'

export default function ProductCart({ product }: { product: IProduct }) {

    const dispatch = useAppDispatch();




    const handleAddToCart = (id: string | number) => {
        dispatch(addToCart(id));
    }






    return (
        <Card
            className="group gap-0 overflow-hidden rounded-2xl border-border/70 py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden bg-muted/40">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    loading="lazy"
                    className="size-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <Badge
                    variant="secondary"
                    className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 capitalize shadow-sm"
                >
                    {product.category}
                </Badge>
            </div>

            {/* Product Details */}
            <CardContent className="flex flex-1 flex-col p-5">

                {/* Title */}
                <h3 className="line-clamp-2 min-h-12 text-base font-semibold leading-6">
                    {product.title}
                </h3>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-2">
                    <Star className="size-4 fill-amber-400 text-amber-400" />

                    <span className="text-sm font-semibold">
                        {product.rating.toFixed(1)}
                    </span>

                    <span className="text-xs text-muted-foreground">
                        / 5.0
                    </span>
                </div>

                {/* Price */}
                <div className="mt-5">
                    <p className="text-xs text-muted-foreground">
                        Price
                    </p>

                    <p className="mt-1 text-2xl font-bold tracking-tight">
                        ${product.price.toFixed(2)}
                    </p>
                </div>

                {/* Add to Cart */}
                <Button
                    onClick={() => handleAddToCart(product.id)}
                    className="mt-5 w-full rounded-xl"
                    size="lg"
                >
                    <ShoppingCart className="mr-2 size-4" />
                    Add to Cart
                </Button>

            </CardContent>
        </Card>
    )
}
