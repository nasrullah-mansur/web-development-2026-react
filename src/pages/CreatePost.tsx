

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { usePosts } from "../../store/post.store";

import * as zod from "zod";

export default function CreatePost() {

    const { addPost } = usePosts();

    const navigate = useNavigate();

    type FormValues = {
        title: string;
        body: string;
    }

    const schema = zod
        .object({
            title: zod.string("Vai kisu ekta dao").min(3, "Eto kom deso keno?"),
            body: zod.string("Body is required.").min(5, "Body must will be at lest 5 characters"),
        });

    const { register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });


    // const handleForm = (e: any) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);
    //     const data = Object.fromEntries(formData.entries());

    //     addPost({
    //         id: crypto.randomUUID(),
    //         title: data.title as string,
    //         body: data.body as string,
    //     });

    //     navigate("/");

    // }

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        addPost({
            id: crypto.randomUUID(),
            ...data,
        });

        navigate("/");
    }

    console.log(errors);


    return (
        <div className="w-[600px] mx-auto border border-gray-400 p-2">

            <NavLink to={"/"}>Home</NavLink>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("title")}
                    type="text"
                    placeholder="Title Here" className="block  w-full border border-green-300 p-2" />

                <span className="block text-xs text-red-500 mb-2">{errors.title?.message}</span>

                <input type="text"
                    {...register("body")}
                    placeholder="Body Here" className="block w-full border border-green-300 p-2" />

                <span className="block text-xs text-red-500 mb-2">{errors.body?.message}</span>


                <button disabled={isSubmitting} className="bg-green-400 p-2">Add Post</button>
            </form>



        </div>
    )
}
