import React from "react";
import Card from "./Card";
import "./BottomMain.css";

const BottomMain: React.FC = () => {
    const cardData = [
        {
            title: "WHY CHOOSE BMW FINANCIAL SERVICES?",
            description:
                "As a proud owner, find everything you need for your BMW in one place, including BMW Accessories, 24/7 Roadside Assistance, Warranties, Accident Support, Servicing and more.",
            imageSrc: "/public/img/Group1.png",
        },
        {
            title: "FIND A BMW CENTRE.",
            description:
                "As a proud owner, find everything you need for your BMW in one place, including BMW Accessories, 24/7 Roadside Assistance, Warranties, Accident Support, Servicing and more.",
            imageSrc: "/public/img/Path2.png",
        },
        {
            title: "DOWNLOAD THE MY BMW APP.",
            description:
                "As a proud owner, find everything you need for your BMW in one place, including BMW Accessories, 24/7 Roadside Assistance, Warranties, Accident Support, Servicing and more.",
            imageSrc: "/public/img/Group3.png",
        },
        {
            title: "BMW OWNER'S DIRECTORY.",
            description:
                "As a proud owner, find everything you need for your BMW in one place, including BMW Accessories, 24/7 Roadside Assistance, Warranties, Accident Support, Servicing and more.",
            imageSrc: "/public/img/Path4.png",
        },
    ];

    return (
        <div className="BottomMain">
            <div className="card-container">
                {cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default BottomMain;
