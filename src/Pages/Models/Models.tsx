import Product from "./Product/Product";
import Search from "./Search/Search";
import style from "./Models.module.css";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/Header/NavBar/NavBar";

const Models = () => {
    return (
        <div className={style.models}>
            <div className={style.navbar}>
                <NavBar />
            </div>
            <div className={style.banner}>
                <Banner
                    title="APPROVED USED BMW 3 SERIES."
                    src="/public/img/02.jpeg"
                    desc=""
                />
            </div>
            <section className={style.modelsSectionTwo}>
                <div className={style.search}>
                    <Search />
                </div>
                <div className={style.product}>
                    <Product />
                </div>
            </section>
            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Models;
