import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>

            <ul>

                <NavLink to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                    Home
                </NavLink>
                <NavLink to="favorites"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                    Favorites
                </NavLink>
                <NavLink to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                    Login
                </NavLink>

            </ul>

        </nav>
    );
};

export default Navbar;