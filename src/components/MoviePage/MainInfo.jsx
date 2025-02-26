import MovieRight from "../MoviePage/MovieRight";
import MovieLeft from "../MoviePage/MovieLeft";

export default function MainInfo(){
    return (
        <div className="main__info">
            <MovieLeft />
            <MovieRight />
        </div>
    )
}