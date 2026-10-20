import { useContext } from "react";
import { CounterContext } from "./contexts/counterContext";

export default function CounterDisplay() {

    const count = useContext(CounterContext);





    return (
        <div className="mb-8 rounded-2xl bg-indigo-50 px-6 py-10 text-center">
            <p className="mb-3 text-sm font-medium text-indigo-500">
                Current Count
            </p>

            <h2 className="text-7xl font-bold tracking-tight text-indigo-600">
                {count}
            </h2>
        </div>
    )
}
