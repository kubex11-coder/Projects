import React from "react"
import "./About.css"
import AboutMeIMG from "../../assets/about-me-img.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { FaRegFolderOpen } from "react-icons/fa"

const About = () => {
    return (
        <section id="about">
            <h5>Pojďme zjistit</h5>
            <h2>Něco o mně</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={AboutMeIMG} alt="about-me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Zkušenosti</h5>
                            <small>4+ let pracovních zkušeností</small>
                        </article>
                        <article className="about__card" id="klienti">
                            <FiUsers className="about__icon" />
                            <h5>Klienti</h5>
                            <small>100 + klientů</small>
                        </article>
                        <article className="about__card">
                            <FaRegFolderOpen className="about__icon" />
                            <h5>Projekty</h5>
                            <small>50+ hotových projektů</small>
                        </article>
                    </div>
                    <p>
                        Jmenuji se Jakub Dvořák a zabývám se kompletní tvorbou
                        webových stránek, e-shopů a web aplikací (FrontEnd).
                        Mezi mé hlavní používané technologie patří HTML, CSS,
                        JavaScript a různé Frameworky, knihovny (Bootstrap,
                        SASS, REACT atd..).
                        <br />
                        Mezi mé další činnosti patří kompletní tvorba a
                        editování videí
                        <br />
                        Tato činnost stejně jako tvorba web stránek začala
                        nejprve jako koníček, ale postupem času jsem se
                        vypracoval skrz výpomoc známým a přátelům a začal
                        pracovat na různých zakázkách. <br />
                        Výše zmiňované činnosti obstarávám primárně já, ale v
                        případě potřeby, větších projektů mám nasmlouvané
                        externí dodavatele, jsem tedy schopný zajistit i větší
                        objem dodávek.{" "}
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Napište mi
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
