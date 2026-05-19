import { createBrowserRouter } from "react-router";
import DashboradPage from "../pages/DashboradPage";
import AppLayout from "../components/Layout/AppLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AppLayout>
                <DashboradPage />
            </AppLayout>
        ),
    },
]);
