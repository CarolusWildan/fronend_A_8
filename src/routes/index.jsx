import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import RegisterPage from "../pages/RegisterPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";


const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Routes Not Found!</div>,
    },
    {
        element: <MainLayout />,
        children: [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/register",
            element: <RegisterPage />,
        },
        {
            path: "/dashboard",
            element: <DashboardPage />,
        },
        ],
    },
]);

const AppRouter = () => {
    return (
        <>
            <Toaster position="top-center" richColors />
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;