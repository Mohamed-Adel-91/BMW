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
            <div className={style.head}>
                <div className={style.navbar}><NavBar /></div>
                <div className={style.banner}>
                    <Banner title="BMW APPROVED USED CARS." src="/public/img/headImg1.png" desc="Search, reserve and buy your Approved Used BMW - all online." />
                </div>
                <div className={style.element}><Elements /></div>
                <div className={style.filter}><Filter /></div>
            </div>
            <div className={style.mainCom}><MainComponent /></div>
            <div className={style.footer}><Footer /></div>
        </div>
    )
}

export default Discover