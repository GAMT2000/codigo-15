import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    titles: [],
}

export const netflixSlice = createSlice({
    name: "titles",
    initialState,
    reducers: {
        setTitles: (state, action) => {
            state.titles = action.payload
        }
    }
})

export const { setTitles } = netflixSlice.actions

export default netflixSlice.reducer