import {createSlice} from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: ""
    },
    reducers: {
        filterNote: (state, action) =>{
            state.search = action.payload;
        }
    }
})

export const {filterNote} = searchSlice.actions;
export default searchSlice.reducer;