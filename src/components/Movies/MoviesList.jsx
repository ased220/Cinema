import MoviesCard from "./MoviesCard";

const arrayList = ['FirstFilm', 'SecondFilm',  'ThirdFilm', 'FourthFilm', 'FifthFilm'];

export default function MoviesList(){
    return(
        <div id="movies" className="movies anchor">
            {
                arrayList.map( (value, index) => (
                    <MoviesCard key = {index} name = {value} />
                ))
            }
        </div>
    )
}