import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletetodo, donetodo } from "../redux/action";
import Edit from "./Edit";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "40%",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <p style={{ textDecoration: todo.done ? "line-through" : null }}>
            {todo.text}
          </p>
          <Button
            variant="danger"
            onClick={() => dispatch(deletetodo(todo.id))}
          >
            Delete
          </Button>
          <Button variant="success" onClick={() => dispatch(donetodo(todo.id))}>
            Done
          </Button>
          <Edit todo={todo} />
        </div>
      ))}
    </div>
  );
}

export default Todo;
