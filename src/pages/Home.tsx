
import { NavLink } from "react-router";
import { usePosts } from "../../store/post.store";

export default function Home() {

    const { posts, deletePost } = usePosts();

    const handleDelete = (id: string | number) => {
        const isConfirm = confirm("Are you sure you want to remove it?");

        if (!isConfirm) return;

        deletePost(id);
    }


    return (
        <div className="max-w-[800px] mx-auto">

            <NavLink className={"bg-green-500 p-2 inline-block mb-3"} to={"/create-post"}>Create a new post</NavLink>

            <div className="grid grid-cols-3 gap-3">
                {posts.map(post => (
                    <div key={post.id} className="border border-gray-300 text-center p-4">
                        <h4 className="font-medium">{post.title}</h4>
                        <NavLink
                            className="bg-red-400 px-3 py-1 text-white"
                            to={`/post/${post.id}`}>Read More</NavLink>

                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </div>
                ))}
            </div>

        </div>
    )
}
