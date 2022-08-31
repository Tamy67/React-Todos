import React from "react";
import { TodoType } from "../common_types/todo";
import "./styles.css";

type TodoPropsType = {
  todo: TodoType;
  toggleTask: (id: number) => void;
  removeTast: (id: number) => void;
};

const Todo = ({ todo, toggleTask, removeTast }: TodoPropsType) => {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.text}
      </div>
      <div className="item-delete" onClick={() => removeTast(todo.id)}>
        X
      </div>
    </div>
  );
};

export default Todo;
