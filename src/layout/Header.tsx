




export default function Header() {


    return (
        <header className="border-b py-3">
            <div className="container mx-auto ">
                <div className="flex items-center justify-between">
                    <a className="font-bold text-2xl" href="#">LOGO</a>

                    <ul className="flex gap-3 font-medium text-lg">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
