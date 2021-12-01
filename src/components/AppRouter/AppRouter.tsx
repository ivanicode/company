import { Routes, Route, Link } from "react-router-dom";
import About from "../../pages/about/About";
import Clients from "../../pages/Clients/Clients";
import Home from '../../pages/home/Home'
import NavBar from "../NavBar/NavBar";
import Contact from "../../pages/contact/Contact";
import Offer from "../../pages/Offer/Offer";
import './appRouter.css'
import background from './cool-background.png'

console.log(process.env.PUBLIC_URL)

const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    display: "flex"
}
function AppRouter(){
    return (
        
        <div style={style} className="app">
            <div className="background">
                <NavBar />
                <div className="components">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/clients" element={<Clients />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/offer" element={<Offer />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AppRouter;