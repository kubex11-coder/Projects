import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://www.linkedin.com/in/jakub-dvo%C5%99%C3%A1k-592ba9145/"
                target="_blank"
            >
                <BsLinkedin />
            </a>
            <a href="https://github.com/kubex11-coder/Projects" target="_blank">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/jakubdvorak91/" target="_blank">
                <GrInstagram />
            </a>
        </div>
    )
}

export default HeaderSocials
