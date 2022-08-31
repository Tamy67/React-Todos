import React, { useState } from "react";
import "./styles.css";

type TodoFormType = {
  addTask: (task: string) => void;
};

const TodoForm = ({ addTask }: TodoFormType) => {
  const [textInput, setTextInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(textInput);
    setTextInput("");
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div style={{ marginTop: 100, marginBottom: 40 }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo" className="labelTodo">
          Que faut-il faire ?{" "}
        </label>
        <input
          id="new-todo"
          className="new-todo"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={textInput}
          type="text"
          placeholder="Entre une tâche"
        />
        <button type="submit" className="addTask">
          AJOUTER
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
