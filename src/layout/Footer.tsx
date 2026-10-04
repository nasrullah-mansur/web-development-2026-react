import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-3 border-t text-center">
            <p className="flex justify-center items-center gap-2">
                <FaRegCopyright />
                <span>copyright All right reserved.</span>
            </p>
        </footer>
    )
}
