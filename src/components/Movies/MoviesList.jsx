
import { useLocation } from "react-router-dom";
import SkeletonFilm from "../Skeletons/SkeletonFilm.jsx";
import MoviesCard from "./MoviesCard";

import { useSelector } from "react-redux";
import FavoritesMoviesList from "./FavoritesMoviesList.jsx";


export default function MoviesList(){
    const path = useLocation();

    const { films, status, filteredMovies, sortCategoryFilteredMovies } = useSelector( store => store.movies );    
    const { favoriteMovies } = useSelector( store => store.favorites);
    // const filterMovie = filteredMovies.length === films.length ?  [] : filteredMovies;

    function movieToShow(){
        let movieShow=[]

        
        if ( filteredMovies.length > 0 ){
            movieShow = filteredMovies;
        }else if (sortCategoryFilteredMovies.length > 0){

            movieShow = sortCategoryFilteredMovies;
        }else {
            movieShow = films;
        }
        
        return movieShow;

    }

    const renderFavorites = () => {
        if (path.pathname === '/favorites') {
            return <FavoritesMoviesList favorites = {{favoriteMovies, filteredMovies, sortCategoryFilteredMovies}} />
        } else {
            if (status === 'loading...') {
                return (
                    [...new Array(30)].map((_, index) => <SkeletonFilm key={index} />)
                );
            } else {
                const movieShow = movieToShow(); 
                return movieShow.map((value, index) => <MoviesCard key={index} {...value} />);
            }
        }
    };

    return(
        <div id="movies" className="movies anchor">
            {
                renderFavorites()
            }
        </div>
    )
}