import { AiFillYoutube } from "react-icons/ai"
import { BiLogoInstagram } from "react-icons/bi"
import { FaFacebookF, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div>
            <div>
                <AiFillYoutube />
                <BiLogoInstagram />
                <FaFacebookF />
                <FaTwitter />
            </div>
            <div>
                <h3>Explore BMW</h3>
                <h4>Sitemap</h4>
            </div>
            <div>
                <div>
                    <p>© Global Auto Egypt, All rights reserved</p>
                </div>
                <div>
                    <a href="#Terms">Terms of Use</a>
                    <a href="#Imprint">Imprint</a>
                    <a href="#Legal_Disclaimer">BMW Egypt: Legal Disclaimer</a>
                </div>
            </div>
        </div>
    )
}

export default Footer