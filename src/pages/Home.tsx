
import { NavLink } from "react-router";
import { posts } from "../../data/post";

export default function Home() {
    return (
        <div className="max-w-[800px] mx-auto">

            <div className="grid grid-cols-3 gap-3">
                {posts.map(post => (
                    <div key={post.id} className="border border-gray-300 text-center p-4">
                        <h4 className="font-medium">{post.title}</h4>
                        <NavLink
                            className="bg-red-400 px-3 py-1 text-white"
                            to={`/post/${post.id}`}>Read More</NavLink>
                    </div>
                ))}
            </div>

        </div>
    )
}
