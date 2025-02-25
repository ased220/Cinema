import Runner from '../../assets/Blade Runner 2049.jpg'

export default function BannerFavorites(){

    return (
        <div className="favorites__banner">
            <div className="gradient__overlay" />
            <img src={Runner} alt="" />
        </div>
    )
}