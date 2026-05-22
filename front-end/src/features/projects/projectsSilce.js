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
    },
});

export const { getProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
