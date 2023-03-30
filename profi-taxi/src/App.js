import Header from "./components/header/Header"
import Prices from "./components/ceník/Prices"
import Contacts from "./components/contacts/Contacts"

const App = () => {
    return (
        <div className="container">
            <Header />
            <Prices />
            <Contacts />
        </div>
    )
}

export default App
