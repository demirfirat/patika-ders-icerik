import {createSlice, nanoid} from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes : []
    },
    reducers: {
        addNote : {
            reducer : (state, action) => {
                state.notes.push(action.payload)
            },
            prepare : ({title, note, theme}) => {
                return {payload : {id: nanoid(), title,note,theme}}
            }
    },
    deleteNote : (state, action) => {
        const id = action.payload;
        state.notes = state.notes.filter((element)=>(element.id != id))
    }
}
});

export const {addNote, deleteNote} = notesSlice.actions;
export default notesSlice.reducer;