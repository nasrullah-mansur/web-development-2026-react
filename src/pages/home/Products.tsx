
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import ProductCart from "@/pages/home/ProductCart";
import { Package } from "lucide-react";

export default function Products() {




    return (
        <main className="min-h-screen bg-background">
            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div className="space-y-3">
                        <Badge
                            variant="secondary"
                            className="rounded-full px-3 py-1"
                        >
                            <Package className="mr-1 size-3.5" />
                            Our Collection
                        </Badge>

                        <div>
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Explore Our Products
                            </h1>

                            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                                Discover amazing products at great prices.
                            </p>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        Showing{" "}
                        <span className="font-semibold text-foreground">
                            {products.length}
                        </span>{" "}
                        products
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCart key={product.id} product={product} />
                    ))}
                </div>

            </section>
        </main>
    );
}
