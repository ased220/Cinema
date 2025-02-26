
import BannerFavorites from '../Favorites/BannerFavorites'
import FavoritesList from '../Favorites/FavoritesList'


import Filter from '../Filter/Filter'
import MoviesList from '../Movies/MoviesList'
import MoviesScroll from '../Movies/MoviesScroll'

export default function Favorites(){
    return (
        <>
        <BannerFavorites />
        <div className="container">
            <Filter />
            <div className="favorites_movies">
                <FavoritesList />
                <MoviesList />
            </div>
            <MoviesScroll />
        </div>

        </>
    )
}