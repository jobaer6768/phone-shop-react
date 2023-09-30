import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navber/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;