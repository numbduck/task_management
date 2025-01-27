const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    createTaskPopup: { status: false, helperData: null },
    assignAnnotatorPopup: { status: false, helperData: null },
    deletePopup: { status: false, helperData: null },
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openPopupReducer: (state) => {
            state.openPopup.status = true;
        },
        openCreateTaskPopup(state, action) {
            state.createTaskPopup.status = true;
            state.createTaskPopup.helperData = action.payload;
        },
        closeCreateTaskPopup(state) {
            state.createTaskPopup.status = false;
            state.createTaskPopup.helperData = null;
        },
        openDeletePopup(state, action) {
            state.deletePopup.status = true;
            state.deletePopup.helperData = action.payload;
        },
        closeDeletePopup(state) {
            state.deletePopup.status = false;
            state.deletePopup.helperData = null;
        },
    },
});

export const { openPopupReducer, openCreateTaskPopup, closeCreateTaskPopup, closeDeletePopup, openDeletePopup } = modalSlice.actions;
export default modalSlice.reducer;
