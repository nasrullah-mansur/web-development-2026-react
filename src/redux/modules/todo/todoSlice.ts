import { deleteUser } from "@/redux/modules/users/userSlice";
import { createSlice } from "@reduxjs/toolkit";


type ITodo = {
    id: string | number;
    title: string;
    assignTo: string | number;
}

const initialState: ITodo[] = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {

            state.push(action.payload);


        },
        removeTodo: () => { }
    },
    extraReducers: (builder) => {
        builder.addCase(deleteUser, (state, action) => {
            return state.filter(item => item.assignTo != action.payload);
        })
    }
});


export default todoSlice.reducer;
export const {
    addTodo,
    removeTodo
} = todoSlice.actions;