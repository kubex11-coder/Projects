import "./header.css"
import Enyaq from "../assets/enyaq.png"
import BackgroundVideo from "../assets/background-vid.mp4"
import Logo from "../assets/logo-nobg.png"
import React from "react"
import { SiFacebook } from "react-icons/si"
import { GrInstagram } from "react-icons/gr"
import { ImYoutube } from "react-icons/im"

const Header = () => {
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
            <a href="#">
                <img src={Logo} alt="profi taxi logo" id="profi-taxi-logo" />
            </a>

            <div className="header__social-icons">
                <a href="#">
                    <SiFacebook />
                </a>
                <a href="#">
                    <GrInstagram />
                </a>
                <a href="#">
                    <ImYoutube />
                </a>
            </div>
            <div className="header__text-part">
                <h1>Profi Taxi Mladá Boleslav</h1>
                <h3>+420 777 777 777</h3>
                <p>První TAXI s elektrovozem ve flotile vozů taxislužby.</p>
                <p>Luxusní vozy taxi za standardní ceny</p>
                <p>
                    <strong>Chtějte za své peníze více...</strong>
                </p>
                <div className="header__text-part__buttons">
                    <a className="btn" href="#">
                        Zavolejte
                    </a>
                    <a className="btn" href="#prices">
                        Ceník
                    </a>
                </div>
            </div>
            <img src={Enyaq} alt="Enyaq obrázek" id="enyaq-img" />
        </div>
    )
}

export default Header
