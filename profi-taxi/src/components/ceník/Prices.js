import "./Prices.css"

const Prices = () => {
    return (
        <section className="prices prices__container">
            <h2 id="prices">Ceník služeb</h2>
            <div className="prices__table">
                <div className="prices__table__box">
                    <h3>Nástupní sazba</h3>
                    <div className="prices__table__item">
                        <p>Nástupní Sazba</p>
                        <h4>30,-</h4>
                    </div>
                    <div className="prices__table__item">
                        <p>Cena za 1 Km Město</p>
                        <h4>35,-</h4>
                    </div>
                    <div className="prices__table__item">
                        <p>
                            Cena za 1 Km Mimo Město<br></br>
                            <span>Platí při cestě z MB mimo a zpět</span>
                        </p>
                        <h4>15,-</h4>
                    </div>
                    <div className="prices__table__item">
                        <p>Čekání za 1 min </p>
                        <h4>6,-</h4>
                    </div>
                </div>
                <div className="prices__table__box">
                    <h3>Smluvní přeprava</h3>
                    <div className="prices__table__item">
                        <p>MB - Praha Černý most</p>
                        <h4>1300,-</h4>
                    </div>
                    <div className="prices__table__item">
                        <p>MB - Praha Centrum </p>
                        <h4>1800,-</h4>
                    </div>
                    <div className="prices__table__item">
                        <p>MB - Praha Letiště</p>
                        <h4>2200,-</h4>
                    </div>
                    <h3>Jiné trasy po telefonické nebo e-mailové domluvě</h3>
                </div>
            </div>
        </section>
    )
}

export default Prices
