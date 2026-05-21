import { createBrowserRouter } from "react-router";
import AppLayout from "../components/Layout/AppLayout";
import DashboradPage from "../pages/DashboradPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: (
            <AppLayout>
                <DashboradPage />
            </AppLayout>
        ),
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
]);
