
import SkeletonFilm from "../Skeletons/SkeletonFilm.jsx";
import MoviesCard from "./MoviesCard";

import { useSelector } from "react-redux";


export default function MoviesList(){

    
    const { films, status} = useSelector((store) => {
        return store.movies;
    });
    
 
    return(
        <div id="movies" className="movies anchor">
            { 
                status === 'loading...' ?(
                    [... new Array(30)].map(( _ , index) => <SkeletonFilm key = {index} />)
                    ) : (
                    films.map( (value, index) => 
                            <MoviesCard key = {index} {...value} />)
                    )
            }
        </div>
    )
}