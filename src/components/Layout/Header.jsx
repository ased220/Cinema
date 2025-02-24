
import logo from '../../assets/icons/pngwing.com.png'
import like from '../../assets/icons/icons8-червы-100.png'
export default function Header() {

    return (
        <header>
            <a className="header__logo-flex" href="./#">
                <img src={logo} alt="logo"></img>
                <div className="header__logo-flex_sitename">
                    <p>REACT</p>
                    <p>CINEMA</p>
                </div>
            </a>
            <ul className="header__navbar-flex">
                <a href="./index.html">Home</a>
                <a href="./favorites.html">Favorites</a>
                <a href="#categoryes">Movies</a>
                <a href="#categoryes">Cartoon</a>
                <a href="#categoryes">Fantasy</a>
            </ul>
            <div className="header__auth-flex">
                <div className="favorites__movies">
                    <img src={like} alt="" />
                    <p>0</p>
                </div>
                <a>Account</a>
            </div>
        </header>
    )
}