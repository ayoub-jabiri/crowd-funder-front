import SideBar from "./SideBar";

export default function AppLayout({ children }) {
    return (
        <div className="flex">
            <SideBar />
            <main>{children}</main>
        </div>
    );
}
