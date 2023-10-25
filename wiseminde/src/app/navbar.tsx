import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <aside className=" px-1" aria-label="Sidebar">
            <div className="w-screen flex justify-between sm:static sm:w-32 pr-4">
                <button className="block pr-8 sm:hidden btn" onClick={() => setIsOpen((toggle) => !toggle)}>
                    <BiMenu size="2em" />
                </button>
            </div>
            {isOpen && <WinItems /> || innerWidth > 640 && <WinItems />}
        </aside>
    )

    function WinItems() {
        return (
            <nav
                className="navbar navbar-expand-lg navbar-dark">
                <ul className="navbar-nav navbar-nav-hover flex-row align-items-center"
                    onClick={() => setIsOpen((toggle) => innerWidth > 640 ? true : !toggle)}>
                    <li className="nav-item mb-2">
                        <Link className=" py-1 nav-link" to="/">
                            <span className="nav-link-inner-text">
                                Home
                            </span>
                        </Link>
                    </li>                    
                    <li className="nav-item mb-2">
                        <Link className=" py-1 nav-link" to="/about">
                            <span className="nav-link-inner-text">
                                The Vision
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link className=" py-1 nav-link" to="/artists">
                            <span className="nav-link-inner-text">
                                The Artists
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link className=" py-1 nav-link" to="/projects">
                            <span className="nav-link-inner-text">
                                The Projects
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link className=" py-1 nav-link" to="/artists/artist">
                            <span className="nav-link-inner-text">
                                Test Artist
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

