
import { products } from "../../data/products"
import Ratting from "../share/Ratting"

export default function ProductSection() {


    return (
        <section>
            <h2 className="text-center text-4xl font-semibold py-6">Chose Your Favorite Food</h2>

            <div className="container mx-auto my-[30px]">
                <div className="grid grid-cols-4 gap-[30px]">
                    {products.map((item) => (
                        <div className="border border-gray-300 p-2 rounded-sm" key={item.id}>

                            <img className="w-full" src={item.image} />

                            <h4 className="py-2 text-center text-lg font-medium">{item.title}</h4>

                            <p className="text-center">${item.price}</p>

                            <Ratting count={Math.round(Number(item.ratting))} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
