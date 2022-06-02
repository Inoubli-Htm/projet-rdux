import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listdone, listnotdone } from "../redux/action";

function DoneTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
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
        variant="secondary"
        onClick={() => dispatch(listdone(todos.done))}
      >
        Todo Done
      </Button>
      <Button
        variant="warning"
        onClick={() => dispatch(listnotdone(todos.done))}
      >
        Todo Not Done
      </Button>
    </div>
  );
}

export default DoneTodo;
