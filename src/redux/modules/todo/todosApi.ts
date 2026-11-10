import { baseApi } from "@/redux/api/baseApi";



const todosApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getTodos: build.query({
            query: () => "/todos"
        }),

        setTodo: build.mutation({
            query: (data) => ({
                url: "/todos",
                method: 'POST',
                body: data,
            }),
        }),

    })
});

export const {
    useGetTodosQuery,
    useSetTodoMutation
} = todosApi;

