import { IoIosStar } from "react-icons/io";

type IProps = { count: number }

export default function Ratting({ count }: IProps) {
    return (
        <div className="flex justify-center gap-1 py-2 items-center">

            {Array.from({ length: count }).map((_item, index) => (
                <IoIosStar key={index} className="text-yellow-400 text-lg" />

            ))}


        </div>
    )
}
