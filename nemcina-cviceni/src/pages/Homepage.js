import podstatnáJména from "../data/Data"
import { useState } from "react"
import "./Homepage.css"
import { FaArrowRight } from "react-icons/fa"

// const diePodstatnáJména = podstatnáJména.filter((onePříklad) => {
//     return onePříklad.Barva === "žlutá"
// })

let randomNumber = Math.floor(Math.random() * podstatnáJména.length)

const Homepage = () => {
    const [visibility, setVisibility] = useState(false)
    const [numberIndex, setNumberIndex] = useState(randomNumber)

    const dalšíPříklad = () => {
        setVisibility(false)
        setNumberIndex(Math.floor(Math.random() * podstatnáJména.length))
    }

    return (
        <div className="wrapper">
            <article
                className={
                    visibility
                        ? podstatnáJména[numberIndex].Barva
                        : "box-wrapper"
                }
            >
                <p>{podstatnáJména[numberIndex].CZ}</p>
                <button onClick={() => setVisibility(!visibility)}>
                    Ukázat odpověď
                </button>
                <p className={visibility ? "visible" : "not-visible"}>
                    {podstatnáJména[numberIndex].DE}
                </p>
                <button
                    className={visibility ? "visible" : "not-visible"}
                    onClick={dalšíPříklad}
                >
                    Další příklad <FaArrowRight />
                </button>
            </article>
        </div>
    )
}

export default Homepage
