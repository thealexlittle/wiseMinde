import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function MenuItems() {
        return (
            <ul className="sm:block sm:w-32 w-screen bg-inherit"
                onClick={() => setIsOpen((toggle) => innerWidth > 640 ? true : !toggle)}
            >
                <div className="flex flex-col">
                    <Link className=" py-1" to="/about">The Vision</Link>
                    <Link className=" py-1" to="/artists">The Artists</Link>
                    <Link className=" py-1" to="/projects">The Projects</Link>
                    <Link className=" py-1" to="/artists/artist">Test Artist Page</Link>
                </div>
            </ul>
        )
    }

    return (
        <aside className="h-auto px-1" aria-label="Sidebar">
            <div className="w-screen flex justify-between sm:static sm:w-32">
                <Link className="font-bold font" to="/">WiseMinde</Link>
                <button onClick={() => setIsOpen((toggle) => !toggle)}>
                    <i className="block pr-8 sm:hidden">TI</i>
                </button>
            </div>
            {isOpen && <MenuItems/> || innerWidth > 640 && <MenuItems/>}
        </aside>
    )
}

