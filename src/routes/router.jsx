import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from '../routes/PrivateRoute'
import Rider from "../pages/Rider/Rider";
import AboutPage from "../pages/AboutPage/AboutPage";
import NotFound from "../pages/Shared/NotFound";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/rider',
                element: <PrivateRoute><Rider></Rider></PrivateRoute>
            },
            {
                path: 'coverage',
                element: <Coverage></Coverage>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },

])