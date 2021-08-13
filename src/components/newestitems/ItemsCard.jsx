import React from 'react';

const ItemsCard = ({image}) => {
    console.log(image)

    return (
        <div className="items-card">
            <img alt="" src={image} />
        </div>
    )
}

export default ItemsCard
