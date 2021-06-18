import { useDispatch, useSelector } from "react-redux";
import logger from "../../redux/middleware";
import { remoteTodo, toggleTodo } from "../../redux/todoReducer";

function Todo(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    dispatch(remoteTodo(newTodos));
    logger.print();
  }

  function completeTodo(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return todo;
      }
    });
    dispatch(toggleTodo(newTodos));
    logger.print();
  }

  return (
    <div className={props.isDone ? "done" : ""}>
      <h1>{props.text}</h1>
      <button
        onClick={() => {
          deleteTodo(props.id);
        }}
      >
        X
      </button>
      <button
        onClick={() => {
          completeTodo(props.id);
        }}
      >
        Done
      </button>
    </div>
  );
}

export default Todo;
