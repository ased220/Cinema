import BannerHome from '../Home/BannerHome';
import Filter from '../Filter/Filter';
import MoviesList from '../Movies/MoviesList';
import MoviesScroll from '../Movies/MoviesScroll';

export default function Home(){
    return(
        <>
            <BannerHome />
                <div className="container">
                    <Filter />
                    <MoviesList />  
                    <MoviesScroll />
                </div>
        </>
    )
}