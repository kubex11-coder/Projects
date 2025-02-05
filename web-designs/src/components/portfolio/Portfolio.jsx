import React from "react"
import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.PNG"
import IMG2 from "../../assets/portfolio2.PNG"
import IMG3 from "../../assets/portfolio3.PNG"
import IMG4 from "../../assets/portfolio4.PNG"
import IMG5 from "../../assets/portfolio5.PNG"
import IMG6 from "../../assets/portfolio6.PNG"
import IMG11 from "../../assets/portfolio11.png"

const Portfolio = () => {
    const portfolioData = [
        {
            id: "1",
            title: "OK Recruitment",
            img: IMG11,
            github: "https://github.com/kubex11-coder/Projects",
            web: "https://okrecruitment.cz/",
        },
        {
            id: "2",
            title: "Universe Club",
            img: IMG3,
            github: "https://github.com/kubex11-coder/Projects",
            web: "https://universeclub.cz/",
        },
        {
            id: "3",
            title: "VTJ Constructuon",
            img: IMG4,
            github: "https://github.com/kubex11-coder/Projects",
            web: "https://ukazka-designu.cz/",
        },

        {
            id: "4",
            title: "Překlady NJ - ČJ",
            img: IMG2,
            github: "https://github.com/kubex11-coder/Projects",
            web: "https://stepannekut.eu/",
        },
        {
            id: "5",
            title: "Platit-méně",
            img: IMG5,
            github: "https://github.com/kubex11-coder/Projects",
            web: "https://www.platitmene.cz/",
        },
        {
            id: "6",
            title: "Indie Travel",
            img: IMG6,
            github: "https://github.com/kubex11-coder/Projects",
            web: "#",
        },
    ]

    return (
        <section id="portfolio">
            <h5>Má nedávná práce</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {portfolioData.map(({ id, title, img, github, web }) => {
                    return (
                        <article className="portfolio__item" key={id}>
                            <div className="portfolio__item-image">
                                <img src={img} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={web}
                                    className="btn btn-primary"
                                    target="_blank"
                                >
                                    Web
                                </a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio
