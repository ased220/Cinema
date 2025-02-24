

import iconFacebook from '../../assets/icons/icons8-facebook-новый-144.png'
import iconInstagram from '../../assets/icons/icons8-instagram-144.png'
import iconYoutube from '../../assets/icons/icons8-youtube-144.png'
import iconLinkedin from '../../assets/icons/icons8-линкедин-144.png'

export default function Footer(){
    return (
        <footer>
            <div className="footer__padding">
                <div className="site__info">
                    <p>REACT CINEMA</p>
                    <div>
                        <img src={iconFacebook} alt="" />
                        <img src={iconInstagram} alt="" />
                        <img src={iconYoutube} alt="" />
                        <img src={iconLinkedin} alt="" />
                    </div>
                </div>
                <div className="footer__hrefs">
                    <div>
                        <p>Main</p>
                        <p>Topic</p>
                        <p>Topic</p>
                        <p>Topic</p>
                    </div>
                    <div>
                        <p>FAQ</p>
                        <p>Topic</p>
                        <p>Topic</p>
                        <p>Topic</p>
                    </div>
                    <div>
                        <p>Reports</p>
                        <p>Topic</p>
                        <p>Topic</p>
                        <p>Topic</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}