import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import MainComponent from "./MainComponent/MainComponent"
import style from "./Discover.module.css"

const Discover = () => {
    return (
        <div className={style.discover}>
            <Header />
            <MainComponent />
            <Footer />
        </div>
    )
}

export default Discover