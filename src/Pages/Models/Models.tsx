import Product from "./Product/Product"
import Search from "./Search/Search"
import style from "./Models.module.css"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"

const Models = () => {
    return (
        <div className={style.models}>
            <Header />
            <section className={style.modelsSectionTwo}>
                <div className={style.search}><Search /></div>
                <div className={style.product}><Product /></div>
            </section>
            <Footer />
        </div>
    )
}

export default Models