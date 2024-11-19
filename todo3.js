const todoform = document.querySelector("form");
const todoinput = document.querySelector("#todo-input");
const inputbutton = document.querySelector("#button1");
const todolistUL = document.getElementById("todo-list"); // Replace with actual ID

const label = document.querySelector(".todo-text");

let alltodos = [];

todoform.addEventListener("submit", function (e) {
  e.preventDefault();
  addtodo();
});

function addtodo() {
  let todotext = todoinput.value.trim();
  if (todotext.length > 0) {
    alltodos.push(todotext);
      updatetodolist();
      todoinput.value = "";
      inputbutton.Disabled = true;
    
  }
}

function updatetodolist() {
  todolistUL.innerHTML = "";
  alltodos.forEach((todo, todoindex) => {
    const todoitem = createtodoitem(todo, todoindex);
    todolistUL.append(todoitem);
  });
}

function createtodoitem(todo, todoindex) {
  const todoID = "todo" + todoindex;
  const todoOI = document.createElement("li");
  todoOI.className = "todo";
  todoOI.innerHTML = `
                <input type="checkbox" id="${todoID}">
                <label class="custom-checkbox" for="${todoID}">
                    <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                </label>

                <label for="${todoID}" class="todo-text"> 
                ${todo}
                        
                </label>
                <button id="delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>


                    
                </button>
      
    `;
  const deleteButton = todoOI.querySelector("#delete-button");
  deleteButton.addEventListener("click", function () {
    dltbtn(todoindex);
  });

  return todoOI;
}

function dltbtn(index) {
  alltodos.splice(index, 1);
  console.log("Deleted:", alltodos);
  updatetodolist();

  console.log("deleted");
}
