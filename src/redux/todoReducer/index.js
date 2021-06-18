const ADD_TODO = "ADD_TODO";
const REMOTE_TODO = "REMOTE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

let initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOTE_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return initialState;
  }
}

export default todoReducer;

export function addTodo(todos) {
  return {
    type: ADD_TODO,
    payload: todos,
  };
}

export function remoteTodo(todos) {
  return {
    type: REMOTE_TODO,
    payload: todos,
  };
}

export function toggleTodo(todos) {
  return {
    type: TOGGLE_TODO,
    payload: todos,
  };
}
