import MovieRight from "../MoviePage/MovieRight";
import MovieLeft from "../MoviePage/MovieLeft";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchFilmInState } from "../../Redux/slices/moviesSlice";

export default function MainInfo(){

    const id = useParams();
    
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch( searchFilmInState(id));
    }, [dispatch])

    const { searchFilm } = useSelector(store => store.movies)  
   
    return (
        <div className="main__info">
        { 
            searchFilm.status === "loading..." ? 
                (<p> loading </p>) : 
                (<>
                    <MovieLeft filmInfo = {{...searchFilm}}/>
                    <MovieRight filmInfo = {{...searchFilm}}/>
                </>) 
        }
        </div>
    )
}