import React from "react";
import Card from "./Card";
import style from "./BottomMain.module.css";

const BottomMain: React.FC = () => {
    const cardData = [
        {
            title: "WHY CHOOSE BMW FINANCIAL SERVICES?",
            description:
                "Discover flexible finance solutions across our range of BMW Approved Used Cars with BMW Financial Services. With something that matters so much, choose official finance from BMW.",
            imageSrc: "/public/img/Group1.png   ",
            hoverTitle: "WHY CHOOSE BMW FINANCIAL SERVICES?",
            button: "View More",
        },
        {
            title: "FIND A BMW CENTRE.",
            description:
                "Find Details of your closest BMW Centre.",
            imageSrc: "/public/img/Path2.png",
            hoverTitle: "FIND A BMW CENTRE.",
            button: "Locate A BMW Centre",
        },
        {
            title: "DOWNLOAD THE MY BMW APP.",
            description:
                "From sending your destination directly to your BMW, checking its status or locking remotely, plus easy access to BMW app remotely connects tou to your car and the world of BMW, anytime",
            imageSrc: "/public/img/Group3.png",
            hoverTitle: "DOWNLOAD THE MY BMW APP.",
            button: "Download Now",
        },
        {
            title: "BMW OWNER'S DIRECTORY.",
            description:
                "As a proud owner, find everything you need for your BMW in one place, including BMW Accessories, 24/7 Roadside Assistance, Warranties, Accident Support, Servicing and more.",
            imageSrc: "/public/img/Path4.png",
            hoverTitle: "BMW OWNER'S DIRECTORY",
            button: "Find Out More",
        },
    ];

    return (
        <div className={style.BottomMain}>
            <div className={style.cardContainer}>
                {cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default BottomMain;
