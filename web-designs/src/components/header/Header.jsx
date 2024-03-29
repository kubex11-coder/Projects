import React from "react"
import "./Header.css"
import CTA from "./CTA"
import ME from "../../assets/ME2.png"
import HeaderSocials from "./HeaderSocials"

const Header = (props) => {
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

                <div className="color__picker">
                    <h5>Barevné téma stránky</h5>
                    <button
                        className="color__picker-btn"
                        id="green"
                        onClick={() =>
                            props.setActiveStyle(
                                "#004d00",
                                "#004d00",
                                "#b3ffb3",
                                "#53c653",
                                "#001a00"
                            )
                        }
                    ></button>

                    <button
                        className="color__picker-btn"
                        id="violet"
                        onClick={() =>
                            props.setActiveStyle(
                                "#cc0099",
                                "#800080",
                                "#ff80bf",
                                "#ff4dd2",
                                "#1a000d"
                            )
                        }
                    ></button>
                    <button
                        className="color__picker-btn"
                        id="orange"
                        onClick={() =>
                            props.setActiveStyle(
                                "#cc5200",
                                "#994d00",
                                "#ffad33",
                                "#e68a00",
                                "#1a0d00"
                            )
                        }
                    ></button>
                    <button
                        className="color__picker-btn"
                        id="blue"
                        onClick={() =>
                            props.setActiveStyle(
                                "#1f1f38",
                                "#2c2c6c",
                                "#4db5ff",
                                "rgba(77, 181, 255, 0.4)",
                                "#00001a"
                            )
                        }
                    ></button>
                </div>
            </div>
        </header>
    )
}

export default Header
