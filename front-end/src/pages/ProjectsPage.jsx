import { RiAddLine } from "@remixicon/react";
import ProjectCard from "../components/Layout/projects/ProjectCard";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../features/projects/projectsSilce";
import { useEffect } from "react";
import axios from "axios";

export default function ProjectsPage() {
    const { VITE_API_URL } = import.meta.env;
    const dispatch = useDispatch();

    const token = useSelector((state) => state.userAuth.token);
    const projects = useSelector((state) => state.projects.ownerProjects);

    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await axios.get(`${VITE_API_URL}/projects`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                dispatch(getProjects({ projects: response.data }));
            } catch (error) {
                console.error(error);
            }
        };

        getProject();
    }, []);

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
                {projects &&
                    projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
            </div>
        </div>
    );
}
