import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favourites from "../pages/Favourites/favourites";
import Login from "../pages/Login/login";


const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/phones.json')
            },
            {
                path: '/favorites',
                element: <Favourites></Favourites>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
        
    }
])

export default route;