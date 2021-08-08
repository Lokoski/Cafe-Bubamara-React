import React from 'react';
import { CARD_IMAGES } from '../../shared/card_images';

const Card = ({ id }) => {
    
    return (
        <div className="card">
            <img alt="" src={CARD_IMAGES[id].image} />
        </div>
    )
}

export default Card

