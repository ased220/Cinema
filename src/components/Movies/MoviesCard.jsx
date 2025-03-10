import { Link } from 'react-router-dom'
import Star from '../../assets/icons/star.png'
// import ImgFilm from '../../assets/ImageFılm.jpg'



export default function MoviesCard(props){
    

    return(
       
        <Link className="movies__card" to="movie">
            
            <div className="movies__card-rating">
                <img src={ Star} alt="" />
                <img src={ Star} alt="" />
                <img src={ Star} alt="" />
                <img src={ Star} alt="" />
                <img src={ Star} alt="" />
            </div>
            <img src={ props.imageUrl } alt="" />
        </Link>
        
    )
}