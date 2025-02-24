import Runner from '../../assets/Blade Runner 2049.jpg'
import ImgFilm from '../../assets/ImageFılm.jpg'
import Star from '../../assets/icons/star.png'

export default function Favorites(){
    return (
        <main>
        <div className="favorites__banner">
            <div className="gradient__overlay" />
            <img src={Runner} alt="" />
        </div>
        <div className="container">
            <div className="filter">
            <div id="categoryes" className="filter__categoryes">
                <div className="filter__categoryes-flex">
                <div
                    onClick="changeActiveCategorySort(this)"
                    className="filter__categoryes-item active-category"
                >
                    <p>Popular</p>
                    <span />
                </div>
                <div
                    onClick="changeActiveCategorySort(this)"
                    className="filter__categoryes-item"
                >
                    <p>Novelty</p>
                    <span />
                </div>
                <div
                    onClick="changeActiveCategorySort(this)"
                    className="filter__categoryes-item"
                >
                    <p>Featured</p>
                    <span />
                </div>
                <div
                    onClick="changeActiveCategorySort(this)"
                    className="filter__categoryes-item"
                >
                    <p>Short films</p>
                    <span />
                </div>
                </div>
                <span />
            </div>
            <div className="filter__buttons">
                <button>Movies</button>
                <button>Cinema</button>
                <button>Adventure</button>
                <button>Comedy</button>
                <button>Fantasy</button>
                <button>History</button>
                <button>Cartoon</button>
                <button>Detective</button>
                <button>Mysticism</button>
                <button>Drama</button>
            </div>
            <div className="filter__search">
                <input type="text" placeholder="Search..." />
                <button>
                <i className="fa fa-search" />
                </button>
            </div>
            </div>
            <div className="favorites_movies">
            <div className="top-movies">
                <p>Top Rated Films</p>
                <div className="top-movies__card">
                <div className="top-movies__card-padding">
                    <img src={ ImgFilm } alt="" />
                    <div className="top-movies__card-info">
                    <div className="top-movies__card-info-title">
                        <p>Бегущий по лезвию 2049</p>
                        <p>Ридли Скотт</p>
                    </div>
                    <div className="top-movies__card-info-description">
                        <p>Film</p>
                        <p>2019</p>
                        <p>180m</p>
                        <p>9.1</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="top-movies__card">
                <div className="top-movies__card-padding">
                    <img src={ ImgFilm } alt="" />
                    <div className="top-movies__card-info">
                    <div className="top-movies__card-info-title">
                        <p>Бегущий по лезвию 2049</p>
                        <p>Ридли Скотт</p>
                    </div>
                    <div className="top-movies__card-info-description">
                        <p>Film</p>
                        <p>2019</p>
                        <p>180m</p>
                        <p>9.1</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="top-movies__card">
                <div className="top-movies__card-padding">
                    <img src={ ImgFilm } alt="" />
                    <div className="top-movies__card-info">
                    <div className="top-movies__card-info-title">
                        <p>Бегущий по лезвию 2049</p>
                        <p>Ридли Скотт</p>
                    </div>
                    <div className="top-movies__card-info-description">
                        <p>Film</p>
                        <p>2019</p>
                        <p>180m</p>
                        <p>9.1</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="top-movies__card">
                <div className="top-movies__card-padding">
                    <img src={ ImgFilm } alt="" />
                    <div className="top-movies__card-info">
                    <div className="top-movies__card-info-title">
                        <p>Бегущий по лезвию 2049</p>
                        <p>Ридли Скотт</p>
                    </div>
                    <div className="top-movies__card-info-description">
                        <p>Film</p>
                        <p>2019</p>
                        <p>180m</p>
                        <p>9.1</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="top-movies__card">
                <div className="top-movies__card-padding">
                    <img src={ ImgFilm } alt="" />
                    <div className="top-movies__card-info">
                    <div className="top-movies__card-info-title">
                        <p>Бегущий по лезвию 2049</p>
                        <p>Ридли Скотт</p>
                    </div>
                    <div className="top-movies__card-info-description">
                        <p>Film</p>
                        <p>2019</p>
                        <p>180m</p>
                        <p>9.1</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="movies">
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
                <a className="movies__card" href="/">
                <div className="movies__card-rating">
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                    <img src={ Star } alt="" />
                </div>
                <img src={ ImgFilm } alt="" />
                </a>
            </div>
            </div>
            <div className="movies__scroll">
            <button>
                <i className="fa-solid fa-arrow-down" />
            </button>
            </div>
        </div>

        </main>
    )
}