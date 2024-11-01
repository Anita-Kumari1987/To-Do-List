import './style.css';
import {addTodo} from "./todo.js";
import {allTodos, todoForm} from "./todo.js";
import { createTodoItem } from './createTodoItem.js';
import { updateTodoList } from './updateTodoList.js';
import { getTodos } from './saveTodos.js';
import { saveTodos } from './saveTodos.js';

let allTodos= getTodos();
updateTodoList();

todoForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  addTodo();
})

createTodoItem();



