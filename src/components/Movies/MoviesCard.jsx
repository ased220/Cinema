import Star from '../../assets/icons/star.png'
import ImgFilm from '../../assets/ImageFılm.jpg'



export default function MoviesCard(props){
    

    return(
       
        <a className="movies__card" href="./movie.html">
            <p>{ props.name }</p>
            <div className="movies__card-rating">
                <img src={ Star} alt="" />
                <img src={ Star} alt="" />
                <img src={ Star} alt="" />
                <img src={ Star} alt="" />
                <img src={ Star} alt="" />
            </div>
            <img src={ ImgFilm } alt="" />
        </a>
        
    )
}