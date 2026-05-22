import { RiArrowLeftLongLine } from "@remixicon/react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { getSingleProject } from "../features/projects/projectsSilce";

export default function ProjectsDetailsPage() {
    const { VITE_API_URL } = import.meta.env;
    const { id } = useParams();
    const dispatch = useDispatch();

    const token = useSelector((state) => state.userAuth.token);
    const currentProject = useSelector(
        (state) => state.projects.currentProject
    );

    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await axios.get(
                    `${VITE_API_URL}/projects/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                dispatch(getSingleProject({ project: response.data }));
            } catch (error) {
                console.error(error);
            }
        };

        getProject();
    }, []);

    if (!currentProject) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Link
                to="/projects"
                className="text-[#2196F3] text-sm flex items-center gap-1 cursor-pointer mb-4"
            >
                <RiArrowLeftLongLine />
                <span>Back to Projects</span>
            </Link>
            <div>
                <h1 className="text-3xl font-bold">{currentProject.title}</h1>
            </div>
        </div>
    );
}
