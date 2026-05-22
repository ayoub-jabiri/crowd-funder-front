import { Link } from "react-router";

export default function ProjectCard() {
    return (
        <div className="col-span-4 bg-gray-800 border border-gray-400 rounded-md p-6 hover:translate-y-[-10px] main-transition">
            <h2 className="text-lg font-bold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-2">
                This is a brief description of the project. It gives an overview
                of what the project is about.
            </p>
            <p className="text-sm text-gray-400 mb-2">
                Status: <span className="text-[#2196F3]">Open</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
                Capital: <span className="text-[#2196F3]">$10,000</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
                Amount Invested: <span className="text-[#2196F3]">$5,000</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
                Max Percentage Allowed:{" "}
                <span className="text-[#2196F3]">20%</span>
            </p>
            <Link
                to="/projects/1"
                className="block text-gray-400 hover:text-white text-center underline mt-4 main-transition"
            >
                View Details
            </Link>
        </div>
    );
}
