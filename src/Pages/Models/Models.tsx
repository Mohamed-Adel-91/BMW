import Product from "./Product/Product"
import Search from "./Search/Search"
import style from "./Models.module.css"
import Footer from "../../Components/Footer/Footer"
import Banner from "../../Components/Banner/Banner"

const Models = () => {
    return (
        <div className={style.models}>
            <Banner title="APPROVED USED BMW 3 SERIES." src="/public/img/headImg2.jpg" desc="" />
            <section className={style.modelsSectionTwo}>
                <div className={style.search}><Search /></div>
                <div className={style.product}><Product /></div>
            </section>
            <Footer />
        </div>
    )
}

export default Models