import Footer from "../../Components/Footer/Footer"
import MainComponent from "./MainComponent/MainComponent"
import style from "./Discover.module.css"
import Banner from "../../Components/Banner/Banner"
import Elements from "../../Components/Header/Elements/Elements"
import Filter from "../../Components/Header/Filter/Filter"
import NavBar from "../../Components/Header/NavBar/NavBar"


const Discover = () => {
    return (
        <div className={style.discover}>
            <NavBar />
            <Banner title="BMW APPROVED USED CARS." src="/public/img/headImg1.png" desc="Search, reserve and buy your Approved Used BMW - all online." />
            <Elements />
            <Filter />
            <MainComponent />
            <Footer />
        </div>
    )
}

export default Discover