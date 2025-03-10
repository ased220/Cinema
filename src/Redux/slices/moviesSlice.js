import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
     films: [],
     status: null,
     errors: null
}

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
    try {
        const movies = await fetch('https://67c063aeb9d02a9f224981ff.mockapi.io/ednpoint/movie');
        if (!movies.ok){
            throw new Error('Error on server, sorry')
        }
        return movies.json();
    } catch (error) {
        console.error(error);
        throw error;}
});


const moviesSlice = createSlice({
    name: 'movie',
    initialState,   
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) =>{
            state.status = 'loading...'
            // console.log(state.status);
            })
            .addCase(fetchMovies.fulfilled, (state, action) =>{
                console.log(action.payload);
                state.films = action.payload;
                state.status = 'fullfield';
            })
            .addCase(fetchMovies.rejected, (state, action) =>{
                state.status = 'Error...'
                state.errors = action.error.message; 
                console.error(action.error.message);
        })
    }
})

export default moviesSlice.reducer;

 