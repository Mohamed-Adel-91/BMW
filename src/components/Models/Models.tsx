import Product from "./Product/Product"
import Search from "./Search/Search"
import style from "./Models.module.css"
import Home from "../Home/Home"
import Footer from "../Discover/Footer/Footer"

const Models = () => {
    return (
        <div className={style.models}>
            <Home />
            <section className={style.modelsSectionTwo}>
                <div className={style.search}><Search /></div>
                <div className={style.product}><Product /></div>
            </section>
            <Footer />
        </div>
    )
}

export default Models