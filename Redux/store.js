import { configureStore } from "@reduxjs/toolkit";
import screenSlice from "./features/screen/screenSlice";

export const store = configureStore({
    reducer: {
        screen: screenSlice
    },
})

