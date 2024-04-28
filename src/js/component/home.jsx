import React, { useState } from "react";

const Home = () => {

  const handlers = {
    handleInputChange: (e) => setInputValue(e.target.value),
    handleInputKeyDown: (e) => {
      if (e.key === "Enter") {
        if (inputValue.trim() !== "") {
          setTodos([...todos, inputValue.trim()]);
          setInputValue("");
        } else {
          alert("El valor de la tarea no puede ser vacío");
        }
      }
    },
    handleRemoveTodo: (index) => () =>
      setTodos(todos.filter((_, currentIndex) => index !== currentIndex))
  };

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={handlers.handleInputChange}
            value={inputValue}
            onKeyDown={handlers.handleInputKeyDown}
            placeholder="What do you need to do"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <i className="far fa-trash-alt" onClick={handlers.handleRemoveTodo(index)}></i>
          </li>
        ))}
      </ul>
      <div>Tienes {todos.length} tasks</div>
    </div>
  );
};

export default Home;

