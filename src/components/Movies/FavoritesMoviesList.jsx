/* eslint-disable react/prop-types */
import MoviesCard from "./MoviesCard";


const FavoritesMoviesList = ( {favorites} ) => {
    // favoriteMovies, filteredMovies, sortCategoryFilteredMovies}
    let movieToShow =[];

    if ( favorites.filteredMovies.length > 0 ){
        movieToShow = favorites.filteredMovies.filter((value)=>{
            return favorites.favoriteMovies.some(favorite => favorite.title === value.title)
        })
        // movieToShow = favorites.filteredMovies;
    }else if (favorites.sortCategoryFilteredMovies.length > 0){ 
        movieToShow = favorites.sortCategoryFilteredMovies.filter((value)=>{
            return favorites.favoriteMovies.some(favorite => favorite.title === value.title)
        })
        // movieToShow = favorites.sortCategoryFilteredMovies;
    }else if (movieToShow.length === 0 ){
        return <p>У вас отсутствуют избранные фильмы</p>
    }
    else {
        movieToShow =  favorites.favoriteMovies;
    }


    return movieToShow.map((value, index) => {
        return <MoviesCard key = {index} {...value}/>
    })
}

export default FavoritesMoviesList;