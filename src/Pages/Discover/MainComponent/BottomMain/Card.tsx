import React from "react";
import style from "./BottomMain.module.css";

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
    hoverTitle: string;
    button: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, hoverTitle, button }) => {
    return (
        <div className={style.card}>
            <img src={imageSrc} alt={title} />
            <div className={style.Gradient}></div>
            <h2>{title}</h2>
            <div className={style.overlay}>
                <div className={style.overlayContent}>
                    <h3>{hoverTitle}</h3>
                    <p>{description}</p>
                    <button className={style.findMoreBtn}>{button}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
