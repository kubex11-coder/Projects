import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="www.seznam.cz" target="_blank">
                <BsLinkedin />
            </a>
            <a href="www.seznam.cz" target="_blank">
                <FaGithub />
            </a>
            <a href="www.seznam.cz" target="_blank">
                <GrInstagram />
            </a>
        </div>
    )
}

export default HeaderSocials
