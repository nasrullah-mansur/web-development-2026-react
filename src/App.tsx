import { useState } from "react";
import AddToCart from "./AddToCart";

export default function App() {


  const [count, setCount] = useState(0);



  return (
    <div className="text-center my-5">



      <h1 className="text-2xl">Count Is <span className="font-bold text-red-500">{count}</span></h1>

      <div className="flex gap-2 mt-3 justify-center">
        <button onClick={() => setCount(count + 1)} className="border p-1 cursor-pointer">Increment</button>
        <button onClick={() => setCount(count - 1)} className="border p-1 cursor-pointer">Decrement</button>
      </div>

      <AddToCart />


    </div>
  );
}







