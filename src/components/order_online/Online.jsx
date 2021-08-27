import React from "react";
import uber from "../../assets/images/onlineservices-logos/UberEatsLogo.png"

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
    <div className="uber">
    <button onClick={orderUber} className="ubereats-btn" />
      <h5 className="order-text">Order With UberEats</h5>
    </div>
    <div className="doordash">
    <button onClick={orderDoordash} className="doordash-btn" />
      <h5 className="order-text">Order With Doordash</h5>
    </div>
    <div className="postmates">
    <button onClick={orderPostmates} className="postmates-btn" />
      <h5 className="order-text">Order With Postmates</h5>
    </div>
    </div>
  );
};

export default Online;
