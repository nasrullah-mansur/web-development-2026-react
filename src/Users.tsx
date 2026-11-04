
import { use } from "react";
import { getUsers } from "../lib/getUsers";

const usersPromise = getUsers();

export default function Users() {



    const users = use(usersPromise);




    return (
        <div>
            <h1>User List</h1>

            <ul>
                {users.map(item => (

                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>

        </div>
    )
}
