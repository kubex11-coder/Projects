import React from "react"
import "./Services.css"
import { AiOutlineCheck } from "react-icons/ai"

const Services = () => {
    return (
        <section id="services">
            <h5>Co nabízím?</h5>
            <h2>Nabízím</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Kompletní tvorba nárhu design webových stránek.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p> Soustředění na UI (uživatelské rozhraní).</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p> Soustředění na UX (uživatelská zkušenost).</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Návrh designu webových stránek probíhá
                                flexibilně za komunikace s klientem.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Po dokončení návru je možné daný návrh také
                                naprogramovat.
                            </p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Vývoj Webu</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Vývoj statických i dynamických webových stránek.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p> Vývoj E-shopů a Web aplikací.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                V průběhu vývoje je samozřejmostí pravidelná
                                konzultace s klientem
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Nabízíme i úpravu již stávajících webových
                                stránek.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Součástí služby je i základní SEO.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Součástí služby je i zařízení webové adresy a
                                web hostingu.
                            </p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Video Tvorba</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p> Kompletní tvorba videa včetně editace.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p> Pouze pořízení video záběrů.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p> Pouze editace již pořízených záběrů.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Editace videí v softwaru Premiere Pro - doplnění
                                textů, hudby, sound designu, tranzicí atd...
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p> Základní tvorba animací.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
