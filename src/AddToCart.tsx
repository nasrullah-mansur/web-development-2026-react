import { useState } from "react";

// const initialTodos = [
//     {
//         id: "1",
//         title: "hello one"
//     },
//     {
//         id: "2",
//         title: "hello two"
//     }
// ]

type Todo = {
    id: string | number;
    title: string;
}

type TodoList = Todo[];


export default function AddToCart() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState<TodoList>([]);

    const handleClick = () => {
        const newObj = {
            id: crypto.randomUUID(),
            title: text
        }

        setTodos([
            ...todos,
            newObj
        ]);

        setText("")
    }

    const handleDelete = (id: string) => {

        const isConfirm = confirm("Are you sure you want to delete it?");

        if (!isConfirm) return;


        const updateTodosAfterDelete = todos.filter((item) => {
            return item.id != id;
        })

        setTodos(updateTodosAfterDelete)

    }

    return (
        <div className="border w-[500px] p-4 border-gray-200 mx-auto my-[50px]">
            <div className="flex">
                <input value={text} onChange={(event) => setText(event.target.value)} type="text" className="border p-1 border-gray-300 w-full" />
                <button onClick={handleClick} type="button" className="bg-green-500 cursor-pointer text-white p-1">Add</button>
            </div>


            <div className="mt-3">
                <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-xl">Our Todo List</h4>
                    <span>Count: {todos.length}</span>
                </div>

                <ul className="flex flex-col justify-start items-start">
                    {todos.map((item, index) => (
                        <li key={item.id} className="py-2 flex justify-between w-full">
                            <span>{index + 1}. {item.title}</span>
                            <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-xs cursor-pointer text-white p-1">Delete</button>
                        </li>
                    ))}

                </ul>


                <button onClick={() => setTodos([])} className="block p-1 bg-red-500 text-white mt-3 w-full cursor-pointer">Clear All</button>
            </div>
        </div>
    )
}
