import { createSlice } from "@reduxjs/toolkit";


function loadFavoritesmovies(){
    const dataLocal = localStorage.getItem('favoritesMovies')
    const parse = dataLocal ? JSON.parse(dataLocal) : [];
    return parse;
}


const initialState = {
    favoriteMovies: loadFavoritesmovies(),
    status: 'loading'
}

const favoritesSlice = createSlice({
    name: 'movie',
    initialState,   

    reducers:{
       addFavoritesMovie: (state, action) =>{
        const dataFilm = action.payload;

        const checkFavorites = state.favoriteMovies.some(movie => movie.id === dataFilm.id);
        if (!checkFavorites){
            state.favoriteMovies.push(dataFilm);
            localStorage.setItem('favoritesMovies', JSON.stringify(state.favoriteMovies));
        }
       },
       removeFavoritesMovie: (state, action) =>{
            const dataFilm = action.payload;
            
            console.log(state.favoriteMovies );
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
            
            state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== dataFilm.id);
            console.log(state.favoriteMovies );
            localStorage.setItem('favoritesMovies', JSON.stringify(state.favoriteMovies))
    }
    }
})

export default favoritesSlice.reducer;

export const {addFavoritesMovie, removeFavoritesMovie} = favoritesSlice.actions; 