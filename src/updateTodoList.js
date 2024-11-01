import {todoListUL} from "./todo.js";
import {allTodos} from "./todo.js";
import { createTodoItem } from "./createTodoItem.js";

export function updateTodoList(){
  todoListUL.innerHTML = "";
  allTodos.forEach((todo,todoIndex) => {
    todoItem = createTodoItem(todo,todoIndex);
    todoListUL.appent(todoItem);
  })

}