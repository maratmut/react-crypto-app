import { configureStore } from "@reduxjs/toolkit";
import assetSlice from "./slice/assets";
import authSlice from "./slice/auth";
const store = configureStore({
    reducer: {
        auth: authSlice,
        assets: assetSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store