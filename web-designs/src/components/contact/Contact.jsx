import React from "react"
import "./Contact.css"
import { HiOutlineMail } from "react-icons/hi"
import { RiMessengerLine } from "react-icons/ri"
import { FaWhatsapp } from "react-icons/fa"

const Contact = () => {
    return (
        <section id="contact">
            <h5>Spojte se se mnou</h5>
            <h2>Kontaktujte mne</h2>

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
                        <h5>Jakub Dvořákz</h5>
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
                        type="text"
                        name="name"
                        placeholder="Vaše celé jméno"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Váš e-mail"
                        required
                    />
                    <textarea
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

export default Contact
