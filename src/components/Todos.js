import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletetodo, donetodo } from "../redux/action";
import Edit from "./Edit";

function Todo() {
  const [filter, setFilter] = useState(false);
  const [done, setDone] = useState(true);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          width: "30%",
          justifyContent: "space-between",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Button
          variant="outline-secondary"
          onClick={() => {
            setFilter(true);
            setDone(true);
          }}
        >
          Todo Done
        </Button>
        <Button
          variant="outline-warning"
          onClick={() => {
            setFilter(true);
            setDone(false);
          }}
        >
          Todo Not Done
        </Button>
        <Button variant="outline-info" onClick={() => setFilter(false)}>
          All List
        </Button>
      </div>
      {!filter ? (
        <>
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
              <Button
                variant="success"
                onClick={() => dispatch(donetodo(todo.id))}
              >
                Done
              </Button>
              <Edit todo={todo} />
            </div>
          ))}
        </>
      ) : done ? (
        <>
          {todos
            .filter((todo) => todo.done === true)
            .map((todo) => (
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  width: "40%",
                  padding: "10px",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{ textDecoration: todo.done ? "line-through" : null }}
                >
                  {todo.text}
                </p>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deletetodo(todo.id))}
                >
                  Delete
                </Button>
                <Button
                  variant="success"
                  onClick={() => dispatch(donetodo(todo.id))}
                >
                  Done
                </Button>
                <Edit todo={todo} />
              </div>
            ))}
        </>
      ) : (
        <>
          {todos
            .filter((todo) => todo.done === false)
            .map((todo) => (
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  width: "40%",
                  padding: "10px",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{ textDecoration: todo.done ? "line-through" : null }}
                >
                  {todo.text}
                </p>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deletetodo(todo.id))}
                >
                  Delete
                </Button>
                <Button
                  variant="success"
                  onClick={() => dispatch(donetodo(todo.id))}
                >
                  Done
                </Button>
                <Edit todo={todo} />
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Todo;
