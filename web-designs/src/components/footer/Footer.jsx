import React from "react"
import "./Footer.css"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                Web-designs
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#">Domů</a>
                </li>
                <li>
                    <a href="#about">O mě</a>
                </li>
                <li>
                    <a href="#experience">Zkušenosti</a>
                </li>
                <li>
                    <a href="#services">Služby</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Kontakty</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a
                    href="https://www.linkedin.com/in/jakub-dvo%C5%99%C3%A1k-592ba9145/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/kubex11-coder/Projects"
                    target="_blank"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/jakubdvorak91/"
                    target="_blank"
                >
                    <GrInstagram />
                </a>
            </div>
        </footer>
    )
}

export default Footer
