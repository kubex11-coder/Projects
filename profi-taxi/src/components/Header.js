import "./header.css"
import Enyaq from "./assets/enyaq.png"
import BackgroundVideo from "./assets/background-vid.mp4"
import Logo from "./assets/logo-nobg.png"

const Header = () => {
    // document.querySelector("#background-video").play()

    return (
        <div className="header__container">
            <video
                src={BackgroundVideo}
                id="background-video"
                autoPlay
                playsInline
                muted
                loop
            ></video>

            <img src={Logo} alt="profi taxi logo" id="profi-taxi-logo" />
            <div className="header__text-part">
                <h1>Profi Taxi</h1>
                <h3>+420 777 777 777</h3>
                <div className="header__text-part__buttons">
                    <a className="btn" href="#">
                        Zavolejte
                    </a>
                    <a className="btn" href="#">
                        Ceník
                    </a>
                </div>
            </div>
            <img src={Enyaq} alt="Enyaq obrázek" id="enyaq-img" />
        </div>
    )
}

export default Header
