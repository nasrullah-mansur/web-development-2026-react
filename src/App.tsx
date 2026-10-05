import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ProductContainer from "./products/productContainer";

import { products } from "../data/products";

export default function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header products={products} />
      <main className="flex-1">
        <ProductContainer products={products} />
      </main>
      <Footer />
    </div>
  );
}







