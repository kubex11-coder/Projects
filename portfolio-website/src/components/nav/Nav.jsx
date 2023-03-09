import React from "react"
import "./Nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BsBook } from "react-icons/bs"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageDetail } from "react-icons/bi"

const Nav = () => {
    return (
        <nav>
            <a href="#" className="active">
                <AiOutlineHome />
            </a>
            <a href="#about">
                <AiOutlineUser />
            </a>
            <a href="#experience">
                <BsBook />
            </a>
            <a href="#services">
                <RiServiceLine />
            </a>
            <a href="#contact">
                <BiMessageDetail />
            </a>
        </nav>
    )
}

export default Nav
