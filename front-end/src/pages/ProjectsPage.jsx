import { RiAddLine } from "@remixicon/react";
import ProjectCard from "../components/Layout/projects/ProjectCard";

export default function ProjectsPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Projects Page</h1>
                <button
                    type="button"
                    class="bg-white text-black border border-black font-medium leading-5 rounded-md text-sm px-4 py-2.5 flex items-center gap-2 cursor-pointer"
                >
                    <RiAddLine />
                    <span>New Project</span>
                </button>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <ProjectCard />
            </div>
        </div>
    );
}
