import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-6 shadow-md rounded-md">

            <Logo></Logo>

            <ul className="flex gap-6">

                <li>
                    <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                        }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="favorites"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                        }>
                        Favorites
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                        }>
                        Login
                    </NavLink>
                </li>

            </ul>

        </nav>
    );
};

export default Navbar;