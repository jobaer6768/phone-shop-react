import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favourites from "../pages/Favourites/favourites";
import Login from "../pages/Login/login";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PhonePage from "../pages/PhonePage/PhonePage";


const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
            {
                path: '/phones/:id',
                element: <PhonePage></PhonePage>,
                loader: () => fetch('/phones.json')
            }
        ]
        
    }
])

export default route;