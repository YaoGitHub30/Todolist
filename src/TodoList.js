import React from "react";
import { Paper, List, ListItem, Divider, ListItemText } from "@mui/material";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <Todo
                id={todo.id}
                key={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default TodoList;
