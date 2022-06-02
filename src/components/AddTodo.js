import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";

function AddTodo() {
  const [champs, setChamps] = useState("");
  const dispatch = useDispatch();
  const handelAdd = (e) => {
    e.preventDefault();
    if (champs) {
      dispatch(addTodo(champs));
      setChamps("");
    }
  };

  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <Form style={{ display: "flex" }} onSubmit={handelAdd}>
        <FormControl
          type="text"
          onChange={(e) => setChamps(e.target.value)}
          value={champs}
        />
        <Button variant="info" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddTodo;
