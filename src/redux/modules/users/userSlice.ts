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
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "michael@example.com",
        role: "User",
        status: "Inactive",
        avatar: "",
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
        role: "Manager",
        status: "Active",
        avatar: "",
    },
    {
        id: 5,
        name: "David Miller",
        email: "david@example.com",
        role: "User",
        status: "Active",
        avatar: "",
    },
    {
        id: 6,
        name: "Olivia Taylor",
        email: "olivia@example.com",
        role: "User",
        status: "Inactive",
        avatar: "",
    },
];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        deleteUser: () => { }
    }
});


export default userSlice.reducer;
export const { deleteUser } = userSlice.actions;


