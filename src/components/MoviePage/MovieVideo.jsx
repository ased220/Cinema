import Titanic from '../../assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4'

export default function MovieVideo(){
    return (
        <div className="video-wrapper">
            <video controls>
                <source src={ Titanic } type="video/mp4"/>
            </video>
        </div>
    )
}