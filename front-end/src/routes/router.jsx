import { createBrowserRouter } from "react-router";
import AppLayout from "../components/Layout/AppLayout";
import DashboradPage from "../pages/DashboradPage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
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
]);
