import { Heart, ShoppingCart, Star } from 'lucide-react';
import type { Product } from '../../types/product';
import useDispatchCart from '../hooks/useDispatchCart';

export default function ProductItem({ product }: { product: Product }) {

    const dispatch = useDispatchCart();

    return (
        <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

            {/* Product Image */}
            <div className="relative flex h-60 items-center justify-center overflow-hidden bg-slate-100 p-6">

                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Wishlist Button */}
                <button
                    type="button"
                    aria-label={`Add ${product.title} to wishlist`}
                    className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition-colors hover:text-rose-500"
                >
                    <Heart size={19} />
                </button>

            </div>

            {/* Product Details */}
            <div className="p-5">

                {/* Rating */}
                <div className="mb-3 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={15}
                            className={
                                star <= product.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "fill-slate-100 text-slate-200"
                            }
                        />
                    ))}

                    <span className="ml-2 text-sm font-medium text-slate-500">
                        ({product.rating}.0)
                    </span>
                </div>

                {/* Product Title */}
                <h3 className="mb-3 line-clamp-2 min-h-12 text-base font-semibold leading-6 text-slate-800 transition-colors group-hover:text-indigo-600">
                    {product.title}
                </h3>

                {/* Price */}
                <div className="mb-5">
                    <span className="text-2xl font-bold text-slate-900">
                        ${product.price.toLocaleString()}
                    </span>
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={() => dispatch({
                        type: "Add",
                        payload: {
                            id: product.id,
                        }
                    })}
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
                >
                    <ShoppingCart size={19} />
                    Add to Cart
                </button>

            </div>
        </div>
    )
}
