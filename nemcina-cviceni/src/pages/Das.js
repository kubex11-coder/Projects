import podstatnáJména from "../data/Data"
import { useState } from "react"
import "./Das.css"
import { FaArrowRight } from "react-icons/fa"

const diePodstatnáJména = podstatnáJména.filter((onePříklad) => {
    return onePříklad.Barva === "modrá"
})

let randomNumber = Math.floor(Math.random() * diePodstatnáJména.length)

const Das = () => {
    const [visibility, setVisibility] = useState(false)
    const [numberIndex, setNumberIndex] = useState(randomNumber)

    const dalšíPříklad = () => {
        setVisibility(false)
        setNumberIndex(Math.floor(Math.random() * diePodstatnáJména.length))
    }

    return (
        <div className="wrapper">
            <article
                className={
                    visibility
                        ? diePodstatnáJména[numberIndex].Barva
                        : "box-wrapper"
                }
            >
                <p>{diePodstatnáJména[numberIndex].CZ}</p>
                <button onClick={() => setVisibility(!visibility)}>
                    Ukázat odpověď
                </button>
                <p className={visibility ? "visible" : "not-visible"}>
                    {diePodstatnáJména[numberIndex].DE}
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

export default Das
