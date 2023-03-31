import "./contacts.css"
import React from "react"
import { useEffect } from "react"
import { HiOutlineMail } from "react-icons/hi"
import { RiMessengerLine } from "react-icons/ri"
import { FaWhatsapp } from "react-icons/fa"

const Contacts = () => {
    useEffect(() => {
        const input = document.querySelector(".input-jump")
        input.addEventListener("focus", () => {
            console.log("tt")
            input.classList.add("jump")
        })
        input.addEventListener("blur", () => {
            console.log("tt")
            input.classList.remove("jump")
        })

        const input1 = document.querySelector(".input-jump1")
        input1.addEventListener("focus", () => {
            console.log("tt")
            input1.classList.add("jump")
        })
        input1.addEventListener("blur", () => {
            console.log("tt")
            input1.classList.remove("jump")
        })

        const text = document.querySelector(".text-jump")
        text.addEventListener("focus", () => {
            console.log("tt")
            text.classList.add("jump")
        })
        text.addEventListener("blur", () => {
            console.log("tt")
            text.classList.remove("jump")
        })
    }, [])

    return (
        <section id="contact">
            <h1>Spojte se s námi</h1>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>jakubdvorak91@seznam.cz</h5>
                        <a
                            href="mailto:jakubdvorak91@seznam.cz"
                            target="_blank"
                        >
                            Pošli zprávu
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5></h5>
                        <a href="https://m.me/kubex/" target="_blank">
                            Pošli zprávu
                        </a>
                    </article>
                    <article className="contact__option">
                        <FaWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5></h5>
                        <a href="https://api.whatsapp.com/send?phone+420774403576">
                            Pošli zprávu
                        </a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS*/}
                <form action="mail.php" method="post">
                    <input
                        className="input-jump"
                        type="text"
                        name="name"
                        placeholder="Vaše celé jméno"
                        required
                    />

                    <input
                        className="input-jump1"
                        type="email"
                        name="email"
                        placeholder="Váš e-mail"
                        required
                    />

                    <textarea
                        className="text-jump"
                        name="message"
                        rows="7"
                        placeholder="Vaše zpráva"
                        required
                    ></textarea>

                    <button type="submit" className="btn btn-primary">
                        Pošli zprávu
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contacts
