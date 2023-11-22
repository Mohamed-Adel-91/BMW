import Footer from "../../Components/Footer/Footer"
import MainComponent from "./MainComponent/MainComponent"
import style from "./Discover.module.css"
import Banner from "../../Components/Banner/Banner"
import Header from "../../Components/Header/Header"


const Discover = () => {
    return (
        <div className={style.discover}>
            <Header />
            <Banner title="BMW APPROVED USED CARS." src="/public/img/headImg1.png" desc="Search, reserve and buy your Approved Used BMW - all online." />
            <MainComponent />
            <Footer />
        </div>
    )
}

export default Discover