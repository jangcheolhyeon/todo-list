import React from "react";
import { useState, useEffect } from 'react';
import { TodoContainer, TodoHeader, TodoList } from "./components";

function App() {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    for(let i = 0; i < localStorage.length; i++) { 
      const todoInfo = JSON.parse(localStorage.getItem(i));
      console.log(todoInfo);
      setTodos((prev) => [
        ...prev,
        {...todoInfo},
      ])
    }
  }, [])

  return(
    <TodoContainer>
      <TodoHeader todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} /> 
    </TodoContainer>
  );
}

export default App;
