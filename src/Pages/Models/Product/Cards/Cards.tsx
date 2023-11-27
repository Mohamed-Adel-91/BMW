import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
} from "reactstrap";
import style from "./Cards.module.css";
import "./Cards.module.css";
import items from "./cards.json"
import { MdOutlineCameraAlt } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";

interface Items {
    id: number,
    carImg: string,
    bmwLogo: string,
    specification: string,
    location: string,
    favorite: string,
    spec: string,
    picNo: number,
    name: string,
    category: string,
    fender: string,
    kind: string,
    model: string,
    chassisNo: string,
    km: number,
    cashPrice: string,
    perMonth: string,
    deposit: string
}

const Cards = () => {
    const cardsElements = items.map((items: Items) => {
        return (
            <Card
                className={style.oneCard}
                key={items.id}
                style={{
                    width: "24rem",
                }}
            >
                <div className={style.headDiv}>
                    <img className={style.carImg} style={{
                        width: "100%",
                        height: "300px",
                    }} alt="Car Image" src={items.carImg} />
                    <div className={style.specification}>
                        {items.specification}
                    </div>
                    <div className={style.logoDiv}>
                        <img className={style.logo} src={items.bmwLogo} alt="BMW LOGO" />
                    </div>
                    <div className={style.picNo}>
                        <a href="#" id="smallIcon"><MdOutlineCameraAlt /></a>
                        <span>{items.picNo}</span>
                    </div>
                    <div className={style.sideDiv}>
                        <div className={style.location}>
                            <span>{items.location}</span>
                            <a href="#" id="smallIcon"><CiLocationOn /></a>
                        </div>
                        <div className={style.favorite}>
                            <span>{items.favorite}</span>
                            <a href="#" id="smallIcon"><IoMdStarOutline /></a>
                        </div>
                        <div className={style.spec}>
                            <span>{items.spec}</span>
                            <a href="#" id="smallIcon"><FaRegEye /></a>
                        </div>
                    </div>
                </div>
                <CardBody className={style.cardBody}>
                    <CardTitle className={style.CardTitle} tag="h5">{items.name}</CardTitle>
                    <CardSubtitle className={style.CardSubtitle} tag="h6">
                        {items.category}
                    </CardSubtitle>
                    <div className={style.centerBar}>
                        <div>{items.fender}</div>
                        <div>{items.kind}</div>
                        <div>{items.model}</div>
                        <div>{items.chassisNo}</div>
                        <span>{items.km} KM</span>
                    </div>
                    <div className={style.prices}>
                        <div className={style.cashPrice}>
                            <p>Cash Price</p>
                            <span>{items.cashPrice} <div>EGP</div></span>
                        </div>
                        <div className={style.perMonth}>
                            <p>Per Month</p>
                            <span>{items.perMonth} <div>EGP</div></span>
                        </div>
                        <div className={style.deposit}>
                            <p>Your Deposit</p>
                            <span>{items.deposit} <div>EGP</div></span>
                        </div>
                    </div>
                    <div className={style.cardFooter}>
                        <div className={style.sideList}>
                            <ul>
                                <li><a href="#">Enquire Now</a></li>
                                <li><a href="#">View Details</a></li>
                            </ul>
                        </div>
                        <div className={style.sideButtonDiv}>
                            <Button>Reserve & Buy</Button>
                            <a href="#">Learn How To Reserve A Vehicle For E100</a>
                        </div>
                    </div>
                </CardBody>
            </Card>
        )
    })
    return (
        <div className={style.Cards}>
            {cardsElements}
        </div>
    );
};

export default Cards;
