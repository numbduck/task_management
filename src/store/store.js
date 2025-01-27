import { setupListeners } from "@reduxjs/toolkit/query/react";
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modals";
import crudReducer from "./slices/crud";

const store = configureStore({
    reducer: {
        modal: modalReducer,
        crud: crudReducer,
    },
});

setupListeners(store.dispatch);

export default store;
