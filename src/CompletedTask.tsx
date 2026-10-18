import { CheckCircle2, ClipboardList } from 'lucide-react';
import type { Todo } from "../types/todo.ts";
import TodoItem from './TodoItem';

export default function CompletedTask({ completedTasks, onRunning }: { completedTasks: Todo[], onRunning: (id: string | number) => void }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <CheckCircle2 size={22} />
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">
                            Completed Tasks
                        </h2>
                        <p className="text-sm text-slate-500">
                            Tasks you've already finished.
                        </p>
                    </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                    {completedTasks.length} Completed
                </span>
            </div>

            <div className="space-y-3">
                {completedTasks.map((todo) => (
                    <TodoItem onRunning={onRunning} key={todo.id} todo={todo} />
                ))}
            </div>

            {completedTasks.length === 0 && (
                <div className="py-10 text-center">
                    <ClipboardList
                        size={36}
                        className="mx-auto text-slate-300"
                    />
                    <p className="mt-3 text-sm text-slate-500">
                        No completed tasks yet.
                    </p>
                </div>
            )}
        </div>
    )
}
