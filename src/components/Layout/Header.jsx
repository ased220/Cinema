
import logo from '../../assets/icons/pngwing.com.png'
import like from '../../assets/icons/icons8-червы-100.png'
import { Link } from 'react-router-dom'
export default function Header() {

    return (
        <header>
            <Link className="header__logo-flex" to="/">
                <img src={logo} alt="logo"></img>
                <div className="header__logo-flex_sitename">
                    <p>REACT</p>
                    <p>CINEMA</p>
                </div>
            </Link>
            <ul className="header__navbar-flex">
                <Link to="/">Home</Link>
                <Link to="favorites">Favorites</Link>
                <Link to="#categoryes">Movies</Link>
                <Link to="#categoryes">Cartoon</Link>
                <Link to="#categoryes">Fantasy</Link>
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