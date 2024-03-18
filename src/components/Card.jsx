import React from "react";

function Card({ cardType, rowIndex, isClicked, handleCardClick, cardIndex, isLastRow, check }) {
  const handleClick = () => {
    if (!isClicked) {
      handleCardClick(cardType, rowIndex, cardIndex);
    }
  };


  return (
    <div
      className={`card ${cardType} ${isClicked ? `${cardType}Clicked` : ""} ${isLastRow && check ? "hintActive" : ""}`}
      onClick={handleClick}
    >
      <img src={`${cardType}.png`} alt={`${cardType}`} />
    </div>
  );
}

export default Card;
