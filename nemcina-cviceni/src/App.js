import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import SharedLayout from "./pages/SharedLayout"
import Der from "./pages/Der"
import Die from "./pages/Die"
import Das from "./pages/Das"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/Die" element={<Die />} />
                    <Route path="/Der" element={<Der />} />
                    <Route path="/Das" element={<Das />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
