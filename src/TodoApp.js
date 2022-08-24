import React, { useState,useEffect } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import UseLocalStorage from "./hooks/useLocalStorage";

function TodoApp() {
  const [todos, setTodos] = UseLocalStorage("todos",[]);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id:uuidv4(), task: newTodoText, completed: false }]);
  };
  const removeTodo=(todoId)=>{
    const updatedTodos=todos.filter(todo=>todo.id!==todoId);
    setTodos(updatedTodos);
  };
  const toggleTodo=(todoId)=>{
    const updatedTodos=todos.map(todo=>todo.id===todoId?{...todo,completed:!todo.completed}:todo);
    setTodos(updatedTodos);
  }
  const editTodo=(id,newTodoText)=>{
    const updatedTodos=todos.map(todo=>todo.id===id?{...todo,task:newTodoText}:todo);
    setTodos(updatedTodos);
  }
  console.log(todos)
  return (
    <Paper
      style={{
        padding: 0,
        marrgin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
