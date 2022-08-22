import React from "react";
import { TextField } from "@mui/material";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, task, editTodo, toggleEdit }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        toggleEdit();
      }}
      style={{
        marginLeft: "1rem",
        width: "50%",
      }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        fullWidth
        autoFocus
      ></TextField>
    </form>
  );
}
export default EditTodoForm;
