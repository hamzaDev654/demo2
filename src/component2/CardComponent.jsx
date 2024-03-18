import React, { useState } from "react";
import './Card.css'
import Card from "./Card";
const CardComponent = () => {
    const numberOfRows = 4;
  const numberOfColumns = 10;
  const cardsPerColumn = 4;

  const [transformValue, setTransformValue] = useState(0);

  const columnWidth = window.innerWidth / numberOfColumns;

  const iconClickHandler = (index) => {
   const nextColumnPosition = index * columnWidth;
  setTransformValue(nextColumnPosition);
  };

  const generateCards = () => {
    const cards = [];
    for (let i = 0; i < numberOfRows * numberOfColumns * cardsPerColumn; i++) {
      const rowIndex = Math.floor(i / (numberOfColumns * cardsPerColumn * cardsPerColumn));
      const columnIndex = Math.floor((i % (numberOfColumns * cardsPerColumn)) / cardsPerColumn);
      const cardIndex = i % cardsPerColumn;
      const card = (
        <Card
          key={i}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          cardIndex={cardIndex}
          iconClickHandler={() => iconClickHandler(columnIndex)}
        />
      );
      cards.push(card);
    }
    return cards;
  };
  

  return (
    <div className="component">
      <div
        className="cards-wrapper"
        style={{ transform: `translateX(-${transformValue}px)` }}
      >
        {generateCards()}
      </div>
    </div>
  );
};

export default CardComponent;
