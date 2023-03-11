import React from "react"
import "./Experience.css"
import { BsCheckCircleFill } from "react-icons/bs"

const Experience = () => {
    return (
        <section id="experience">
            <h5>Jaké mám zkušenosti?</h5>
            <h2>Mé zkušenosti</h2>

            <div className="container experience__container">
                <div className="experience__web">
                    <h3>Web vývojář </h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsCheckCircleFill className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">expert</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheckCircleFill className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">expert</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheckCircleFill className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">pokročilý</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheckCircleFill className="experience__details-icon" />
                            <div>
                                <h4>SASS</h4>
                                <small className="text-light">pokročilý</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheckCircleFill className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">pokročilý</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheckCircleFill className="experience__details-icon" />
                            <div>
                                <h4>REACT</h4>
                                <small className="text-light">pokročilý</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Konec web vývoje, start video */}
                <div className="experience__video">
                    <h3>Video tvorba </h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsCheckCircleFill className="experience__details-icon" />
                            <div>
                                <h4>Tvorba</h4>
                                <small className="text-light">pokročilý</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheckCircleFill className="experience__details-icon" />
                            <div>
                                <h4>Editing</h4>
                                <small className="text-light">expert</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheckCircleFill className="experience__details-icon" />
                            <div>
                                <h4>Premiere Pro</h4>
                                <small className="text-light">expert</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheckCircleFill className="experience__details-icon" />
                            <div>
                                <h4>Animace</h4>
                                <small className="text-light">pokročilý</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
