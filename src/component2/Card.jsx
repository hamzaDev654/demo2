import React from "react";
import "./Card.css";

const Card = ({ rowIndex, columnIndex, cardIndex, iconClickHandler }) => {
  return (
    <div className="card" onClick={iconClickHandler}>
      Card {rowIndex + 1}-{columnIndex + 1}-{cardIndex + 1}
    </div>
  );
};

export default Card;
