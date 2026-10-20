import CounterDisplay from "./CounterDisplay";
import Decrement from "./Decrement";
import Increment from "./Increment";
import ResetCounter from "./ResetCounter";

export default function App() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Counter App
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            A simple counter using React
          </p>
        </div>

        {/* Counter Display */}
        <CounterDisplay />

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Decrement />
          <Increment />

        </div>

        {/* Reset Button */}
        <ResetCounter />

      </div>
    </div>
  )
}
