export default function AppLayout({ children }) {
    return (
        <div className="flex">
            <aside>Side</aside>
            <div>
                <header> This is the header</header>
                <main>{children}</main>
            </div>
        </div>
    );
}
