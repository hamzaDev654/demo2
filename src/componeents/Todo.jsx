import React, { useRef } from "react";
import TodosList from "./TodosList";

const TodoList = ({ addTask }) => {
  const inputTodoRf = useRef();


  const submitHandler = (e) => {
    e.preventDefault();
    const inputRef = inputTodoRf.current.value;
    addTask(inputRef);
   
  };

  return (
    <div>
      <div className="Heading">
        <h3>TODO</h3>
      </div>
      <form onSubmit={submitHandler} >
        <input type="text" ref={inputTodoRf} />
        <button type="submit">Add</button>
      </form>

      <TodosList />
    </div>
  );
};

export default TodoList;
