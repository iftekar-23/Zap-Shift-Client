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
import SendParcel from "../pages/sendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/MyParcels/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/MyParcels/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/MyParcels/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";
import AssignRiders from "../pages/Dashboard/AssignRiders/AssignRiders";
import AdminRoute from "./AdminRoute";
import RiderRoute from "./RiderRoute";
import AssignedDeliveries from "../pages/Dashboard/AssignedDeliveries/AssignedDeliveries";


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
                element: <PrivateRoute><Rider></Rider></PrivateRoute>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            },
            {
                path: '/send-parcel',
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
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
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: ([
            {
                path: 'my-parcels',
                element: <MyParcels></MyParcels>
            },
            {
                path: 'payment/:parcelId',
                element: <Payment></Payment>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'payment-success',
                element: <PaymentSuccess></PaymentSuccess>
            },
            {
                path: 'payment-cancelled',
                element: <PaymentCancelled></PaymentCancelled>
            },

            // rider only routes
            {
                path: 'assigned-deliveries',
                element: <RiderRoute><AssignedDeliveries></AssignedDeliveries></RiderRoute>
            },
            


            // admin only routes
            {
                path: 'approve-riders',
                element: <AdminRoute><ApproveRiders></ApproveRiders></AdminRoute>
            },
            {
                path: 'assign-riders',
                element: <AdminRoute><AssignRiders></AssignRiders></AdminRoute>
            },
            {
                path: 'users-management',
                element: <AdminRoute><UsersManagement></UsersManagement></AdminRoute>
            }
        ])
    }

])