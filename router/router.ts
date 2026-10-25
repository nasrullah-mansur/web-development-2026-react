import { createBrowserRouter } from "react-router";
import PublicLayout from "../src/layout/PublicLayout";
import BlogPost from "../src/pages/BlogPost";
import Home from "../src/pages/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: PublicLayout,
        children: [
            {
                // path: "/",
                index: true,
                Component: Home
            },
            {
                path: "/post/:postId",
                loader: ({ params }) => {
                    return params.postId;
                },
                Component: BlogPost,
            }
        ]
    },

]);



