/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useAppSelector } from "@/redux/hooks";
import { useGetTodosQuery, useSetTodoMutation } from "@/redux/modules/todo/todosApi";
import { useState } from "react";

export default function Home() {

    const { isLoading, data: todos, refetch } = useGetTodosQuery(undefined);

    const [addTodo] = useSetTodoMutation();

    console.log(isLoading, todos);


    const [data, setData] = useState({
        title: "",
    });

    const users = useAppSelector(store => store.users);
    // const dispatch = useAppDispatch();


    // async function getData() {
    //     const res = await fetch('http://localhost:5000/api/todos');
    //     const data = await res.json();

    //     console.log(data);


    // }

    // getData();



    const handleSubmit = async (e: any) => {

        e.preventDefault();


        await addTodo({
            ...data,
        })

        refetch();



    }

    return (
        <>



            {isLoading && <p>Data is Loading ...</p>}

            {!isLoading && todos.data.map(item => (
                <div key={item._id}>

                    <h4>{item.title}</h4>
                    <span>AssignToId: {item.assignTo}</span>
                    <Button>Delete</Button>

                </div>
            ))}


            <form onSubmit={handleSubmit} action="" className="max-w-[400px] mx-auto p-2">
                <Input value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} placeholder="Title ..." />

                <br />
                <br />

                <select onChange={(e) => setData({ ...data, assignTo: e.target.value })} value={data.assignTo}>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}

                </select>

                <br />
                <br />
                <Button type="submit">Submit</Button>
            </form>

        </>
    )
}
