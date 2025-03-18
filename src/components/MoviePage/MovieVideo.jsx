import { useSelector } from 'react-redux'

import { searchParamInYoutube } from '../../tools/searchParamInYoutube';
import SkeletonVideo from '../Skeletons/SkeletonVideo';

export default function MovieVideo(){
    const { searchFilm, status } = useSelector((store) => store.movies)  

    if (status === 'loading') {
        return (
            <>
                <p> loading </p>
                <SkeletonVideo />
            </>
        )
    }


    const trailerUrl = searchFilm?.film?.trailerUrl;

    const videoUrl = trailerUrl? searchParamInYoutube(trailerUrl): '';

    return (

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
        

    );
}