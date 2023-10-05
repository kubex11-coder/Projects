import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <button className="DER">
                <Link to="/der">DER</Link>
            </button>
            <button className="DIE">
                <Link to="/die">DIE</Link>
            </button>
            <button className="DAS">
                <Link to="/das">DAS</Link>
            </button>
            <button className="all">
                <Link to="/">Všechny slovíčka</Link>
            </button>
        </header>
    )
}

export default Navbar
