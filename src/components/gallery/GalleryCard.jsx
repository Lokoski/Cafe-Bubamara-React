import React from 'react';

const Card = ({image}) => {
    
    return (
        <div className="gallery-card">
            <img alt="" src={image} />
        </div>
    )
}

export default Card

