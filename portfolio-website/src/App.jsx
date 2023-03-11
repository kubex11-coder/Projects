import React from "react"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Conatct from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
    function setActiveStyle(bgColor, bgVariant, primaryColor, primaryVariant) {
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
    }

    return (
        <div>
            <Header setActiveStyle={setActiveStyle}></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Conatct></Conatct>
            <Footer></Footer>
        </div>
    )
}

export default App
