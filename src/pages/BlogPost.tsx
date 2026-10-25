import { NavLink, useLoaderData } from "react-router";
import { posts } from "../../data/post";

export default function BlogPost() {

    const postId = useLoaderData();

    const post = posts.find(post => post.id == postId);



    return (
        <div className="max-w-[800px] border border-gray-300 p-4 mx-auto">
            <NavLink className={"bg-red-400 text-white px-3 py-1.5"} to={"/"}>Home</NavLink>

            {post ?
                <>
                    <h4 className="text-center font-medium my-4">{post.title}</h4>
                    <p className="text-center">{post.body}</p>
                </>
                :

                <p className="text-center">
                    No Post Found
                </p>
            }


        </div>
    )
}
