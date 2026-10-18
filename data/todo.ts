import type { Todo } from "../types/todo";

export const todos: Todo[] = [
    {
        id: 1,
        title: "Complete React project",
        description: "Finish the todo application UI design.",
        completed: false,
    },
    {
        id: 2,
        title: "Learn Tailwind CSS v4",
        description: "Practice responsive layouts and utilities.",
        completed: false,
    },
    {
        id: 3,
        title: "Review TypeScript",
        description: "Revise interfaces, types, and generics.",
        completed: false,
    },
    {
        id: 4,
        title: "Setup React project",
        description: "Install React, TypeScript and Tailwind CSS.",
        completed: true,
    },
    {
        id: 5,
        title: "Create project structure",
        description: "Organize components and project folders.",
        completed: true,
    },
];