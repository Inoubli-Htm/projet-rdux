import {
  ADDTODO,
  DELETETODO,
  DONETODO,
  EDITTODO,
  LISTDONE,
  LISTNOTDONE,
} from "./type";

const initialState = {
  todos: [
    { id: 0, text: "Learn React", done: false },
    { id: 1, text: "Learn Redux", done: false },
    { id: 2, text: "Learn HTML", done: false },
    { id: 3, text: "Learn CSS", done: false },
    { id: 4, text: "Learn Node.Js", done: false },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Math.random(), done: false, text: action.payload },
        ],
      };

    case DELETETODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case DONETODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    case EDITTODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    case LISTDONE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.done === true),
      };
    case LISTNOTDONE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.done === false),
      };
    default:
      return state;
  }
}

export default reducer;
