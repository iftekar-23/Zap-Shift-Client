import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout></RootLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'coverage',
                element: <Coverage></Coverage>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            }
        ]
    },
    {
        path:'/',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])