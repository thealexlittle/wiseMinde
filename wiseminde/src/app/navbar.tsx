import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <aside className="h-auto px-2" aria-label="Sidebar">
            <Link to="/">WiseMinde</Link>
            <ul className=" w-24">
                <li className="flex flex-col">
                    <Link to="/artists">The Artists</Link>
                    <Link to="/about">The Vision</Link>
                    <Link to="/projects">The Projects</Link>
                    <Link to="/contact">The Vision</Link>
                    <Link to="/artists/artist">Test Page</Link>
                </li>
            </ul>
        </aside>
    )
}