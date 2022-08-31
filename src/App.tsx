import React, { useState } from "react";
import { TodoType } from "./common_types/todo";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTask = (textInput: string) => {
    if (textInput) {
      const newItem = {
        id: Date.now(),
        text: textInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const handleToggle = (id: number) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  const removeTast = (id: number) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const task =
    todos.length <= 1 ? `${todos.length} tâche ` : `${todos.length} tâches `;

  return (
    <div className="App">
      <TodoForm addTask={addTask} />
      {todos.length !== 0 ? (
        <header>
          <h2>À faire : {task}</h2>
        </header>
      ) : null}
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTask={handleToggle}
            removeTast={removeTast}
          />
        );
      })}
    </div>
  );
}

export default App;
