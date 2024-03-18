import React, { useState } from "react";
import Card from "./Card"; // Import the Card component
import "./CardGrid.css"; // Import your CSS file for styling

function CardGrid() {
  const [clickedCards, setClickedCards] = useState([]);
  const [check, setCheck] = useState(true);
  // You can modify this array according to your data
  const rows = [
    ["green-icon", "black-icon", "green-icon", "black-icon"],
    ["black-icon", "green-icon", "black-icon", "green-icon"],
    ["green-icon", "black-icon", "green-icon", "black-icon"],
    ["black-icon", "green-icon", "black-icon", "green-icon"],
    ["green-icon", "black-icon", "green-icon", "black-icon"],
  ];

  const handleCardClick = (alt, index, cardIndex, isLastRow) => {
    // Create a unique identifier for the clicked card
    const uniqueIdentifier = `${alt}-${cardIndex}`;
    // Add the unique identifier to the clickedCards array
    const newClickedCards = [...clickedCards];
    newClickedCards[index] = newClickedCards[index]
      ? [...newClickedCards[index], uniqueIdentifier]
      : [uniqueIdentifier];
    setClickedCards(newClickedCards);
    setCheck(false);
    if (index === rows.length - 1) {
      isLastRow = false;
    }
  };

  const isClicked = (alt, index, cardIndex) => {
    // Check if the unique identifier for the card is in the clickedCards array
    const uniqueIdentifier = `${alt}-${cardIndex}`;
    return clickedCards[index]
      ? clickedCards[index].includes(uniqueIdentifier)
      : false;
  };

  return (
    <div className="card-grid">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="card-row">
          {row.map((cardType, cardIndex) => (
            <Card
              key={cardIndex}
              cardType={cardType}
              rowIndex={rowIndex}
              isClicked={isClicked(cardType, rowIndex, cardIndex)}
              handleCardClick={() =>
                handleCardClick(cardType, rowIndex, cardIndex)
              }
              cardIndex={cardIndex}
              check={check}
              isLastRow={rowIndex === rows.length - 1}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
