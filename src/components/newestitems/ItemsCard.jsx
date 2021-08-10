import React from 'react';
import { NEW_ITEMS } from '../../shared/new_items';

const ItemsCard = ({id}) => {
    console.log(NEW_ITEMS)
    return (
        <div className="items-card">
            <img alt="" src={NEW_ITEMS[id].image} />
        </div>
    )
}

export default ItemsCard
