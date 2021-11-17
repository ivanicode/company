import { Routes, Route, Link } from "react-router-dom";
import About from "../../pages/About/About";
import Clients from "../../pages/Clients/Clients";
import Home from '../../pages/Home/Home'
import NavBar from "../NavBar/NavBar";
import Contact from "../../pages/Contact/Contact";
import Offer from "../../pages/Offer/Offer";
import './appRouter.css'
import background from './output-onlinepngtools.png'

console.log(process.env.PUBLIC_URL)

const style = {
    backgroundImage: `url(${background})`,
    border: '1px solid red',
    backgroundSize: "cover"
}
function AppRouter(){
    return (
        <div className="app">
            <NavBar />
            <div style={style} className="components">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/offer" element={<Offer />} />
                </Routes>
            </div>
        </div>
    )
}

export default AppRouter;