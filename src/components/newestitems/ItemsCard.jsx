import React from 'react';

const ItemsCard = ({image, title, description}) => {
    console.log(image)

    return (
        <div className="items-card">
            <img alt="" src={image} />
            <div className="items-description">
            <p className="items-title">{title}</p>
            <p>{description}</p>
            </div>
        </div>
    )
}

export default ItemsCard
