import React from "react";

const Online = () => {
  const orderUber = () => {
    window.open(
      "https://www.ubereats.com/store/cafe-bubamara/eWLJCpYfQie_eAUxZfGcag?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"
    );
  };

  const orderDoordash = () => {
    window.open(
      "https://www.doordash.com/store/cafe-bubamara-clifton-104263/?utm_campaign=gpa"
    );
  };

  const orderPostmates = () => {
    window.open(
      "https://postmates.com/store/cafe-bubamara/eWLJCpYfQie_eAUxZfGcag?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"
    );
  };

  return (
    <div className="online-container">
      <button onClick={orderUber} className="ubereats">
        Order With UberEats
      </button>
      <button className="dashdoor" onClick={orderDoordash}>
        Order With DashDoor
      </button>
      <button className="postmates" onClick={orderPostmates}>
        Order With Postmates
      </button>
    </div>
  );
};

export default Online;
