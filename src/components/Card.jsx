import React from 'react';
import './Card.css';

const Card = ({ title, description, imageSrc, buttonText, onButtonClick }) => {
    return (
        <div className="cardContainer">
            <img src={imageSrc} alt={title} className="cardImage" />
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="cardButton" onClick={onButtonClick}>
                {buttonText}
            </button>
        </div>
    )
}

export default Card;