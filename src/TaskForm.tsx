/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type Props = {
    onSubmit: any;
    editItem: any;
    onUpdate: any;
}

export default function TaskForm({ onSubmit, editItem, onUpdate }: Props) {



    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });


    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (formData.title == "" || formData.description == "") {
            toast.error("Please fill out the form correctly");
            return;
        }


        if (editItem) {
            onUpdate({ ...formData, id: editItem.id });
        }
        else {
            onSubmit(formData); // Create new task;

        }

        setFormData({
            title: "",
            description: ""
        })

    }



    useEffect(() => {

        if (editItem) {
            setFormData({
                title: editItem.title,
                description: editItem.description
            })
        }


    }, [editItem]);




    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Plus size={22} />
                </div>

                <div>
                    <h2 className="text-lg font-semibold">
                        Add New Task
                    </h2>
                    <p className="text-sm text-slate-500">
                        Create something to work on.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Task Title
                    </label>

                    <input
                        name="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        id="title"
                        type="text"
                        placeholder="Enter task title..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    />
                </div>

                <div>
                    <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Description
                    </label>

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        id="description"
                        rows={5}
                        placeholder="Write task details..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    />
                </div>

                <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700"
                >
                    <Plus size={19} />

                    {editItem ? "Update Task" : "Add Task"}

                </button>
            </form>
        </section>
    )
}
