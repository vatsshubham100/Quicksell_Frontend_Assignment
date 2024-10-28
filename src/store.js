import { configureStore } from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './Handlers/DataHandlers';
const store = configureStore({
    reducer: {
        DataReducer, SelectDataReducer
    }
})
export default store;