import React from "react"
import "./Header.css"
import CTA from "./CTA"
import ME from "../../assets/ME2.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Ahoj, já jsem:</h5>
                <h1>Jakub Dvořák</h1>
                <h5 className="text-light">FrontEnd Web Vývojář</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    )
}

export default Header
