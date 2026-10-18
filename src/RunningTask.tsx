import { Circle, Clock3 } from 'lucide-react';
import type { Todo } from "../types/todo.ts";
import TodoItem from './TodoItem';

type Props = {
    runningTasks: Todo[],
    onCompleted: (id: number | string) => void,
}

export default function RunningTask({ runningTasks, onCompleted }: Props) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                        <Clock3 size={22} />
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">
                            Running Tasks
                        </h2>
                        <p className="text-sm text-slate-500">
                            Tasks that need your attention.
                        </p>
                    </div>
                </div>

                <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-600">
                    {runningTasks.length} Running
                </span>
            </div>

            <div className="space-y-3">
                {runningTasks.map((todo) => (
                    <TodoItem onCompleted={onCompleted} key={todo.id} todo={todo} />
                ))}
            </div>

            {runningTasks.length === 0 && (
                <div className="py-10 text-center">
                    <Circle
                        size={36}
                        className="mx-auto text-slate-300"
                    />
                    <p className="mt-3 text-sm text-slate-500">
                        No running tasks available.
                    </p>
                </div>
            )}
        </div>
    )
}
