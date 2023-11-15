import { AiFillYoutube } from "react-icons/ai"
import { BiLogoInstagram } from "react-icons/bi"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <>
            <div className={style.Containers}>
                <div className={style.Icons}>
                    <a href="#youtube"><AiFillYoutube /></a>
                    <a href="#instagram"><BiLogoInstagram /></a>
                    <a href="#facebook"><FaFacebookF /></a>
                    <a href="#twitter"><FaTwitter /></a>
                </div>
                <div className={style.txt}>
                    <h3>Explore BMW</h3>
                    <h4>Sitemap</h4>
                </div>
                <div className={style.rightsDiv}>
                    <div className={style.rights}>
                        <p>© Global Auto Egypt, All rights reserved</p>
                    </div>
                    <div className={style.rightsLinks}>
                        <a href="#Terms">Terms of Use</a>
                        <a href="#Imprint">Imprint</a>
                        <a href="#Legal_Disclaimer">BMW Egypt: Legal Disclaimer</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer