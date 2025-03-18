import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
     films: [],
     searchFilm: {
        film: null,
        status: "loading",
        error: null,
     },
     status: null,
     errors: null
}

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
    try {
        const response = await axios.get('https://67c063aeb9d02a9f224981ff.mockapi.io/ednpoint/movie');
        
        return response.data; 
    } catch (error) {
        console.error(error);
        throw error; 
    }

});


const moviesSlice = createSlice({
    name: 'movie',
    initialState,   
    reducers:{
        searchFilmInState: (state, action) =>{
            const { id } = action.payload;
            const searchFilm = state.films.find( film => film.id === id);
            
            state.searchFilm.film = searchFilm;
            state.searchFilm.status= 'fulfilled'
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) =>{
            state.status = 'loading'
            })
            .addCase(fetchMovies.fulfilled, (state, action) =>{
               
                state.films = action.payload;  
                            
                state.status = 'fulfilled';
            })
            .addCase(fetchMovies.rejected, (state, action) =>{
                state.status = 'loading'
                state.errors = action.error.message; 
                console.error(action.error.message);
        })
    }
})

export default moviesSlice.reducer;

export const { searchFilmInState } = moviesSlice.actions;