import { createContext, type Dispatch } from "react";

type CounterAction = {
    type: "Increment" | "Decrement" | "Reset";
};

export const CounterContext = createContext<number | null>(null);

export const CounterReducerContext = createContext<Dispatch<CounterAction> | null>(null);