import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ownerProjects: null,
    currentProject: null,
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        getProjects: (currentState, action) => {
            const { projects } = action.payload;
            currentState.ownerProjects = projects;
        },
        createProject: (currentState, action) => {
            const { newProject } = action.payload;
            currentState.ownerProjects.push(newProject);
        },
        getSingleProject: (currentState, action) => {
            const { project } = action.payload;

            currentState.currentProject = project;
        },
    },
});

export const { getProjects, createProject, getSingleProject } =
    projectsSlice.actions;
export default projectsSlice.reducer;
