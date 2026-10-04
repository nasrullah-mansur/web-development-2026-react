import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ProductSection from "./sections/ProductSection";

export default function App() {



  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
}







