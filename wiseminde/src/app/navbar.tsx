import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <aside className="h-auto px-1" aria-label="Sidebar">
            <div className="w-screen flex justify-between sm:static sm:w-32 pr-4">
                <Link className="font-bold font pb-2" to="/">WiseMinde</Link>
                <button className="block pr-8 sm:hidden" onClick={() => setIsOpen((toggle) => !toggle)}>
                    <BiMenu size="2em" />
                </button>
            </div>
            {isOpen && <MenuItems/> || innerWidth > 640 && <MenuItems/>}
        </aside>
    )


    function MenuItems() {
        return (
            <ul className="sm:block sm:w-36 w-screen bg-inherit transition"
                onClick={() => setIsOpen((toggle) => innerWidth > 640 ? true : !toggle)}
            >
                <div className="flex flex-col">
                    <Link className=" py-1" to="/about">The Vision</Link>
                    <Link className=" py-1" to="/artists">The Artists</Link>
                    <Link className=" py-1" to="/projects">The Projects</Link>
                    <Link className=" py-1" to="/artists/artist">Test Page</Link>
                </div>
            </ul>
        )
    }
}

