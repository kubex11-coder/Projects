import React from "react"
import CV from "../../assets/CV-Dvořák-Jakub.docx"
import "./Header.css"

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">
                Stáhni CV
            </a>
            <a href="#contact" className="btn btn-primary">
                Napiště mi
            </a>
        </div>
    )
}

export default CTA
