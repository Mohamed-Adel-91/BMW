import { AiFillYoutube } from "react-icons/ai"
import { BiLogoInstagram } from "react-icons/bi"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="Containers">
            <div className="Icons">
                    <a href="#youtube"><AiFillYoutube /></a>
                    <a href="#instagram"><BiLogoInstagram /></a>
                    <a href="#facebook"><FaFacebookF /></a>
                    <a href="#twitter"><FaTwitter /></a>
            </div>
            <div className="txt">
                <h3>Explore BMW</h3>
                <h4>Sitemap</h4>
            </div>
            <div className="rightsDiv">
                <div className="rights">
                    <p>© Global Auto Egypt, All rights reserved</p>
                </div>
                <div className="rightsLinks">
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