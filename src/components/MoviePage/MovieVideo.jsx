import { useSelector } from 'react-redux'

import { searchParamInYoutube } from '../../tools/searchParamInYoutube';

export default function MovieVideo(){
    const { searchFilm } = useSelector((store) => store.movies)  
    console.log(searchFilm);
    const trailerUrl = searchFilm.film.trailerUrl;

    const videoUrl = searchParamInYoutube(trailerUrl);
    return (
        <>
        {searchFilm.status === "loading..." ?  (
            <p> loading </p>
        ) : (
            <div className="video-wrapper">
                <iframe 
                    src={`https://www.youtube.com/embed/${videoUrl}`}
                    title='youtube player'
                    width= '100%'
                    height='700'
                    allow='accelerometer; autoplay; clipboard-write; encripted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                ></iframe>
            </div>
            )
        }
        </>
    );
}