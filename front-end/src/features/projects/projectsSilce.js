import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ownerProjects: [],
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
    },
});

export const { getProjects, createProject } = projectsSlice.actions;
export default projectsSlice.reducer;
