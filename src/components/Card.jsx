import React from 'react';
import './Card.css';

const Card = ({ title, description, imageSrc, buttonText, buttonLink }) => {
    const handleClick = () => {
        if (buttonLink) {
            window.open(buttonLink, '_blank');
        }
    };
    return (
        <div className="cardContainer">
            <img src={imageSrc} alt={title} className="cardImage" />
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="cardButton" onClick={handleClick}>
                {buttonText}
            </button>
        </div>
    )
}

export default Card;