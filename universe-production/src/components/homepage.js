import "./homepage.css"
import Logo from "../images/universe-production-logo.png"
import HomeVideo from "../images/universe-video.mp4"
import HomeVideo1 from "../images/universe-video1.mp4"

const homepage = () => {
    return (
        <div className="wrapper">
            <video
                src={HomeVideo1}
                className="header-background"
                id="background-video"
                autoPlay
                playsInline
                muted
                loop
            ></video>
            <div className="text-part">
                <img className="logo" src={Logo} alt="logo" />
                <ul className="menu-nabidka">
                    <li className="menu-item">
                        <a href="index.html">O Nás</a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html">Služby</a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html">Fotogalerie</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default homepage
