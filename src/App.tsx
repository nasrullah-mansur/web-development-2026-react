
import {
  ListTodo
} from "lucide-react";

import { useState } from "react";
import { toast } from "react-toastify";
import { todos as initTodos } from "../data/todo";
import type { Todo } from "../types/todo";
import CompletedTask from "./CompletedTask";
import RunningTask from "./RunningTask";
import TaskForm from "./TaskForm";

export default function App() {

  const [todos, setTodos] = useState(initTodos);
  const [editId, setEditId] = useState<null | number | string>(null);


  const runningTasks = todos.filter((todo) => !todo.completed);
  const completedTasks = todos.filter((todo) => todo.completed);


  const handleSubmit = (formData: { title: string; description: string }) => {

    setTodos([
      {
        id: crypto.randomUUID(),
        title: formData.title,
        description: formData.description,
        completed: false
      },
      ...todos

    ])

  }

  const handleCompleted = (id: number | string) => {

    const updateTodos = todos.map(item => {

      if (item.id == id) {
        return {
          ...item,
          completed: true,
        }
      }

      return item;


    })

    setTodos(updateTodos);


  }

  const handleRunning = (id: number | string) => {
    const updateTodos = todos.map(item => {

      if (item.id == id) {
        return {
          ...item,
          completed: false,
        }
      }

      return item;


    })

    setTodos(updateTodos);
  }

  const handleDelete = (id: number | string) => {

    const updateTodosAfterRemove = todos.filter(item => item.id != id);

    setTodos(updateTodosAfterRemove);

    toast.success("Todo removed successfully");

  }


  // Edit todo;

  const editItem = editId ? todos.find(item => item.id == editId) : null;

  const handleEdit = (id: number | string) => {

    setEditId(id);

  }

  const handleUpdate = (todo: Todo) => {
    console.log(todo);


    const updateTodosAfterUpdateAItem = todos.map(item => {
      if (item.id == todo.id) {
        return todo;
      }

      return item;
    });

    setTodos(updateTodosAfterUpdateAItem)

    toast.success("Todo updated successfully");

    setEditId(null);

  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center justify-center rounded-2xl bg-indigo-100 p-3 text-indigo-600">
            <ListTodo size={28} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Todo App
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Organize your tasks and stay productive.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid items-start gap-6 lg:grid-cols-[350px_minmax(0,1fr)]">
          {/* Left Side - Todo Form */}
          <TaskForm onUpdate={handleUpdate} editItem={editItem} onSubmit={handleSubmit} />

          {/* Right Side - Task Lists */}
          <section className="min-w-0 space-y-6">
            {/* Running Tasks */}
            <RunningTask onEdit={handleEdit} onDelete={handleDelete} onCompleted={handleCompleted} onRunning={handleRunning} runningTasks={runningTasks} />

            {/* Completed Tasks */}
            <CompletedTask onEdit={handleEdit} onDelete={handleDelete} onRunning={handleRunning} completedTasks={completedTasks} />
          </section>
        </div>
      </div>
    </main>
  );
}
