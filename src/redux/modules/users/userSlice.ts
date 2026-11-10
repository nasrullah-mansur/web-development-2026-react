import { type IUser } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUser[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        status: "Active",
        avatar: "",
    },
    {
        id: 2,
        name: "Sarah Wilson",
        email: "sarah@example.com",
        role: "User",
        status: "Active",
        avatar: "",
    }
];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        deleteUser: (state, actions) => {

            return state.filter(item => item.id !== actions.payload);

        }
    }
});


export default userSlice.reducer;
export const { deleteUser } = userSlice.actions;


