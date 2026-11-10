import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteUser } from "@/redux/modules/users/userSlice";



export default function Users() {

    const users = useAppSelector(store => store.users);
    const dispatch = useAppDispatch();

    return (
        <div>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h4>{user.name} {user.id}</h4>
                        <Button onClick={() => dispatch(deleteUser(user.id))}>Delete</Button>
                    </li>

                ))}
            </ul>

        </div>
    );
}
