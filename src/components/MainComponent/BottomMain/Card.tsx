import React from "react";
import "./BottomMain.css";

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} />
            <h2>{title}</h2>
            <div className="overlay">
                <div className="overlay-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button className="find-more-btn">Find More</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
