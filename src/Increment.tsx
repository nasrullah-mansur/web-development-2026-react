import { Plus } from 'lucide-react';
import { useContext } from 'react';
import { CounterReducerContext } from './contexts/counterContext';

export default function Increment() {

    const dispatch = useContext(CounterReducerContext);

    return (
        <button
            onClick={() => dispatch?.({ type: "Increment" })}
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white transition-colors hover:bg-indigo-700"
        >
            <Plus size={20} />
            Increment
        </button>
    )
}
