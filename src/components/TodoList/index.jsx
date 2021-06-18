import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/todoReducer";
import Todo from "../Todo";
import { nanoid } from "nanoid";
import logger from "../../redux/middleware";

function TodoList(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todoText, setTodoText] = useState("");

  function createTodo() {
    dispatch(addTodo({ text: todoText, id: nanoid(), isDone: false }));
    logger.print();
  }

  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        />
        <button onClick={createTodo}>Add</button>
      </div>
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isDone={todo.isDone}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
