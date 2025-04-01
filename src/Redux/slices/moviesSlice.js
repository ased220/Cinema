import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
     films: [],
     filmCategory: [],
     searchFilm: {
        film: null,
        status: "loading",
        error: null,
     },
     status: null,
     errors: null,
     filteredMovies:[]
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
        },
        filterMovies: (state, action) =>{
            const filterItem = action.payload.toLowerCase();
            state.filteredMovies = state.films.filter(movie => movie.title.toLowerCase().includes(filterItem));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) =>{
            state.status = 'loading'
            })
            .addCase(fetchMovies.fulfilled, (state, action) =>{
               
                state.films = action.payload;  
                state.filmCategory = [...new Set(state.films.flatMap(value => value.category))]
                
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

export const { searchFilmInState, filterMovies } = moviesSlice.actions;