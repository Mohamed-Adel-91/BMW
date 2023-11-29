import Banner from "../../Components/Banner/Banner"
import Footer from "../../Components/Footer/Footer"
import NavBar from "../../Components/Header/NavBar/NavBar"
import style from "./PageNotFound.module.css"


const PageNotFound = () => {
    return (
        <div className={style.models}>
            <div className={style.navbar}>
                <NavBar />
            </div>
            <div className={style.banner}>
                <Banner title="SORRY SOMETHING ERROR PAGE NOT FOUND."
                    src="/public/img/PageNotFound.jpg"
                    desc="But you are in the right place for premium mobility." />
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default PageNotFound