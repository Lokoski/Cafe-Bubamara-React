import React from "react";
import ItemsCard from "./ItemsCard";
import { NEW_ITEMS } from "../../shared/new_items";

const Items = () => {
  return (
    <div className="newest-items-container">
      <h1>Newest Menu Items</h1>
      <div className="newest-card-container">
        {NEW_ITEMS.map((image) => {
          return <ItemsCard key={image.id} image={image.image} />;
        })}
      </div>
    </div>
  );
};

export default Items;
