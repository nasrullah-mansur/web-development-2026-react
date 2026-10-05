import ProdcutItem from "./ProdcutItem";

export default function ProductContainer({ products }) {
    return (
        <div className="py-20">
            <h2 className="text-3xl text-center">Product List</h2>

            <div className="container mx-auto grid grid-cols-4 gap-3 mt-8">

                {products.map(item => (
                    <ProdcutItem key={item.id} item={item} />

                ))}
            </div>


        </div>
    )
}
