
import { useDispatch, useSelector } from "react-redux";
import MoviesCard from "./MoviesCard";
import { useEffect } from "react";
import { fetchMovies } from "../../Redux/slices/moviesSlice";

export default function MoviesList(){

    const dispatch = useDispatch();

    const { films } = useSelector((store) => {
        return store.movies;
    });
    
    useEffect(() => {
        dispatch(fetchMovies());
    }, [])
    
    return(
        <div id="movies" className="movies anchor">
            {
                films.map( (value, index) => (
                    <MoviesCard key = {index} {...value} />
                ))
            }
        </div>
    )
}