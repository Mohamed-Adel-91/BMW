import Footer from "./Footer/Footer"
import Home from "../Home/Home"
import MainComponent from "./MainComponent/MainComponent"
import style from "./Discover.module.css"

const Discover = () => {
    return (
        <div className={style.discover}>
            <Home />
            <MainComponent />
            <Footer />
        </div>
    )
}

export default Discover