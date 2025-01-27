const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tasksData: [],
};

const crudSlice = createSlice({
    name: "crud",
    initialState,
    reducers: {
        // Create
        addTask: (state, action) => {
            state.tasksData.push(action.payload);
        },

        // Update 
        updateTask: (state, action) => {
            const { id, updatedData } = action.payload;
            const index = state.tasksData.findIndex((task) => task.id === id);
            console.log(index, "index")
            if (index !== -1) {
                state.tasksData[index] = { ...state.tasksData[index], ...updatedData };
            }
        },

        // Delete
        deleteTask: (state, action) => {
            const { id } = action.payload;
            state.tasksData = state.tasksData.filter((task) => task.id !== id);
        },

    },
});

export const { addTask, updateTask, deleteTask, setTasksData } = crudSlice.actions;
export default crudSlice.reducer;
