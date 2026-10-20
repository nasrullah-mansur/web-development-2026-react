import { Minus } from 'lucide-react';
import { useContext } from 'react';
import { CounterReducerContext } from './contexts/counterContext';

export default function Decrement() {

    const dispatch = useContext(CounterReducerContext);


    return (
        <button
            onClick={() => dispatch?.({ type: "Decrement" })}
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-rose-500 px-5 py-3.5 font-semibold text-white transition-colors hover:bg-rose-600"
        >
            <Minus size={20} />
            Decrement
        </button>
    )
}
