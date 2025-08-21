import { FaBell, FaRegUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-gray-100 w-full py-4 px-15 flex items-center justify-between border border-gray-300">
            <div>
                <h2 className="text-[#111118] text-xl font-bold leading-tight tracking-[-0.015em]">🧠NeuroNotes</h2>
            </div>

            <div className="flex gap-10 items-center ">

                <div className=" border-2 w-70 h-10 flex items-center rounded-xl">
                    <input type="text" name="search" id="search" placeholder="search here" className="outline-none w-full h-full p-2 placeholder:text-lg" />
                </div>

                <div>
                    <FaBell className="h-6 w-6" />
                </div>

                <div>
                    <FaRegUser className="h-6 w-6"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
