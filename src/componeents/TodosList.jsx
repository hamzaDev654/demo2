import React from "react";
import { RxCrossCircled } from "react-icons/rx";
const TodosList = ({ id, text, removeHandler }) => {
  return (
    <>
       <RxCrossCircled
        onClick={() => {
          removeHandler(id);
        }}
        className="icon"
      />
      <p
        onClick={() => {
          removeHandler(id);
        }}
      >
       
        {text}
      </p>
    </>
  );
};

export default TodosList;
