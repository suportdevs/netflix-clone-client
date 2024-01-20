import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getMovies: (state, action) => {
            state.movies = action.payload;
        },
        deleteStoredMovie: (state, action) => {
            state.movies = state.movies.filter((movie) => movie._id !== action.payload);
        }
    }
});

export const {getMovies, deleteStoredMovie} = movieSlice.actions;
export default movieSlice;