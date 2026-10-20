import { RotateCcw } from 'lucide-react'
import { useContext } from 'react'
import { CounterReducerContext } from './contexts/counterContext'

export default function ResetCounter() {

    const dispatch = useContext(CounterReducerContext)

    return (
        <button
            onClick={() => dispatch?.({ type: "Reset" })}
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-600 transition-colors hover:bg-slate-50"
        >
            <RotateCcw size={18} />
            Reset Counter
        </button>
    )
}
