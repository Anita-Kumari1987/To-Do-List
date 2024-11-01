export const todoForm = document.querySelector("form");
export const todoInput = document.getElementById("todo-input");
export const todoListUL = document.getElementById("todo-list");
import { updateTodoList} from "./updateTodoList.js";
import { saveTodos } from "./saveTodos.js";


export function addTodo(){
  let todoText = todoInput.value.trim();
  if(todoText.length<0){
    allTodos.push(todoText); 
    updateTodoList();
    saveTodos();
    todoInput.value="";
  }
}
