import * as React from 'react';
 import { ListItem,ListItemText } from "@mui/material";
 import {ListItemSecondaryAction} from "@mui/material";
 import Checkbox from '@mui/material/Checkbox'; 
import {IconButton} from "@mui/material";
import { Delete } from '@mui/icons-material';
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import EditTodoForm from './EditTodoForm';


 function Todo({id,task,completed,removeTodo,toggleTodo,editTodo}){
    const [isEditing,setIsEditting]=useState(false)
    const toggleIsEditting=()=>{
        setIsEditting(!isEditing);
    }
    return(
        <ListItem>
            {isEditing===false?
            <>
              <Checkbox checked={completed} onClick={()=>toggleTodo(id)}/>
              <ListItemText style={{textDecoration:completed?"line-through":"none"}}>{task}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton aria-label='Delete' onClick={()=>removeTodo(id)}>
                  <Delete />
                </IconButton>
                <IconButton aria-label='Edit' onClick={toggleIsEditting}>
                  <Edit />
                </IconButton>
              </ListItemSecondaryAction></>
              :
              <EditTodoForm id={id}task={task} editTodo={editTodo} toggleEdit={toggleIsEditting}/>
 }            
        </ListItem>
    )
 }
 export default Todo