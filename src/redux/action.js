import {
  ADDTODO,
  DELETETODO,
  DONETODO,
  EDITTODO,
  LISTDONE,
  LISTNOTDONE,
} from "./type";

export const addTodo = (champs) => {
  return {
    type: ADDTODO,
    payload: champs,
  };
};

export const deletetodo = (id) => {
  return {
    type: DELETETODO,
    payload: id,
  };
};

export const donetodo = (id) => {
  return {
    type: DONETODO,
    payload: id,
  };
};

export const edittodo = (id, text) => {
  return {
    type: EDITTODO,
    payload: { id, text },
  };
};

export const listdone = (done) => {
  return {
    type: LISTDONE,
    payload: done,
  };
};
export const listnotdone = (done) => {
  return {
    type: LISTNOTDONE,
    payload: done,
  };
};
