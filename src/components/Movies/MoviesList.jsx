
import { useLocation } from "react-router-dom";
import SkeletonFilm from "../Skeletons/SkeletonFilm.jsx";
import MoviesCard from "./MoviesCard";

import { useSelector } from "react-redux";


export default function MoviesList(){
    const path = useLocation();

    const { films, status} = useSelector( store => store.movies );    
    const { favoriteMovies } = useSelector( store => store.favorites);
    

    const renderFavorites = () => {
        if (path.pathname === '/favorites'){
            return favoriteMovies.length > 0 ? (
                favoriteMovies.map((value, index) =>
                    <MoviesCard key = {index} {...value} />)
            ) : (
                <p> У вас отсутствуют избранные фильмы</p>)
        } else {
            return status === 'loading...' ?(
                [... new Array(30)].map(( _ , index) => <SkeletonFilm key = {index} />)
                ) : (
                films.map( (value, index) => 
                        <MoviesCard key = {index} {...value} />)
                )
        }
    }

    return(
        <div id="movies" className="movies anchor">
            {
                renderFavorites()
            }
        </div>
    )
}