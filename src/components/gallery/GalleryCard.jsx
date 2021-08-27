import React from 'react';

const Card = ({image}) => {
    
    return (
        <div className="gallery-card">
            <img alt="menuItem" src={image} />
        </div>
    )
}

export default Card

