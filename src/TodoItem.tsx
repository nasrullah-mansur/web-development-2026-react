import { Pencil, Trash2 } from "lucide-react";

import type { Todo } from "../types/todo.ts";

type Props = {
    todo: Todo,
    onCompleted: (id: string | number) => void,
    onRunning: (id: string | number) => void
}

export default function TodoItem({ todo, onCompleted, onRunning }: Props) {

    const handleChange = () => {
        if (todo.completed) {

            onRunning(todo.id);

        }

        else {
            onCompleted(todo.id);
        }
    }

    return (
        <div
            className={`group flex items-start gap-3 rounded-xl border p-4 transition ${todo.completed
                ? "border-emerald-100 bg-emerald-50/30"
                : "border-slate-200 bg-white hover:border-indigo-200 hover:bg-indigo-50/30"
                }`}
        >
            {/* Completion Checkbox */}
            <div className="flex shrink-0 items-center pt-1">
                <input
                    onChange={handleChange}
                    type="checkbox"
                    checked={todo.completed}
                    readOnly
                    aria-label={`Mark ${todo.title} as ${todo.completed ? "incomplete" : "completed"
                        }`}
                    className="size-5 cursor-pointer rounded-md border-slate-300 accent-indigo-600"
                />
            </div>

            {/* Task Content */}
            <div className="min-w-0 flex-1">
                <h3
                    className={`wrap-break-word text-sm font-semibold sm:text-base ${todo.completed
                        ? "text-slate-400 line-through"
                        : "text-slate-800"
                        }`}
                >
                    {todo.title}
                </h3>

                <p
                    className={`mt-1 wrap-break-word text-sm leading-relaxed ${todo.completed
                        ? "text-slate-400"
                        : "text-slate-500"
                        }`}
                >
                    {todo.description}
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex shrink-0 items-center gap-1.5">
                <button
                    type="button"
                    title="Edit Task"
                    aria-label={`Edit ${todo.title}`}
                    className="flex size-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-100"
                >
                    <Pencil size={16} />
                </button>

                <button
                    type="button"
                    title="Delete Task"
                    aria-label={`Delete ${todo.title}`}
                    className="flex size-9 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-100"
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </div>
    );
}