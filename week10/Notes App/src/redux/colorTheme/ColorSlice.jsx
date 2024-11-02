import {createSlice} from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name: "colorTheme",
    initialState: {
        theme: "blue",
    },
    reducers: {
        changeTheme: (state, action)=>{
            state.theme = action.payload;
        }
    }
})

export const {changeTheme} = colorSlice.actions;
export default colorSlice.reducer;