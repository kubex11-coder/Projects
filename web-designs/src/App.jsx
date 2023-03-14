import React from "react"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"

import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
    function setActiveStyle(
        bgColor,
        bgVariant,
        primaryColor,
        primaryVariant,
        backgroundColor
    ) {
        document.documentElement.style.setProperty("--color-bg", bgColor)
        document.documentElement.style.setProperty(
            "--color-bg-variant",
            bgVariant
        )
        document.documentElement.style.setProperty(
            "--color-primary",
            primaryColor
        )
        document.documentElement.style.setProperty(
            "--color-primary-variant",
            primaryVariant
        )
        document.documentElement.style.setProperty(
            "--color-background",
            backgroundColor
        )
    }

    return (
        <div>
            <Header setActiveStyle={setActiveStyle}></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Portfolio></Portfolio>

            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default App
