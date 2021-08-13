import React from 'react';

const ItemsCard = ({image, title, description}) => {
    console.log(image)

    return (
        <div className="items-card">
            <img alt="" src={image} />
            <div>
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </div>
    )
}

export default ItemsCard
