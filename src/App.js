import "./App.css";
import Card from "./componeents/Card";
import Todo from "./componeents/Todo";
import TodosList from "./componeents/TodosList";
import { useState } from "react";

function App() {
  const [todo, setToos] = useState([
    { id: Math.random().toString(), text: "" },
  ]);

  const onAddHandler = (task) => {
    setToos((preev) => {
      return [
        ...preev,
        {
          id: Math.random().toString(),
          text: task,
        },
      ];
    });

    // setToos(todo.push(
    //   {
    //     id: Math.random().toString(),
    //     text: task,
    //   },
    // ]);
  };

  const removeHandler = (id) => {
    console.log(id);

    const toddo__ = todo.filter((item) => item.id !== id);

    setToos(toddo__);
  };

  console.log(todo)
  let content = "";

  if (todo.length > 1) {
    content = todo.map((item) => {
      return (
        <Card>
          <li key={item.id}>
            <TodosList
              removeHandler={removeHandler}
              id={item.id}
              text={item.text}
            />
          </li>
        </Card>
      );
    });
  }
  return (
    <div className="App">
      <Todo addTask={onAddHandler} />
      {todo.length > 1 && <ul className="listDiv">{content}</ul>}
    </div>
  );
}

export default App;
