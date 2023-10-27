import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav
        className="navbar navbar-expand-lg p-1">
        <ul className="navbar-nav navbar-nav-hover flex flex-row min-w-[365px] justify-start"
            onClick={() => setIsOpen((toggle) => innerWidth > 640 ? true : !toggle)}>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    <span className="nav-link-inner-text">
                        Home
                    </span>
                </Link>
            </li>                    
            <li className="nav-item">
                <Link className=" nav-link" to="/about">
                    <span className="nav-link-inner-text">
                        The Vision
                    </span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/artists">
                    <span className="nav-link-inner-text">
                        The Artists
                    </span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/projects">
                    <span className="nav-link-inner-text">
                        The Projects
                    </span>
                </Link>
            </li>
        </ul>
    </nav>
    )
}

