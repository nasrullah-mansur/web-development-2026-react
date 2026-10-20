import { useReducer, type ReactNode } from "react";
import { CounterContext, CounterReducerContext } from "../contexts/counterContext";
import counterReducer from "../reducers/counterReducer";


export default function CounterProvider({ children }: { children: ReactNode }) {
    const [count, dispatch] = useReducer(counterReducer, 0);

    return (
        <CounterContext value={count}>
            <CounterReducerContext value={dispatch}>
                {children}
            </CounterReducerContext>
        </CounterContext>
    )
}