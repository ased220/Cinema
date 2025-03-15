 
import MainInfo from "../MoviePage/MainInfo";
import MovieVideo from "../MoviePage/MovieVideo";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { searchFilmInState } from "../../Redux/slices/moviesSlice";


export default function Movie(){

    // const id = useParams();
    // const dispatch = useDispatch();
    // useEffect(() =>{    
    //     dispatch( searchFilmInState(id))
    // }, [dispatch])

    // const { searchFilm } = useSelector(store => store.movies)  
    // console.log(searchFilm);
      
    return(
        
    <main>
        <MovieVideo />
        <MainInfo />
    </main>

        
    )
}