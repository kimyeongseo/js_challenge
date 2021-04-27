const form = document.querySelector('form'),
input = document.querySelector(".add-to-do"),
pendingList = document.querySelector(".pending_list"),
finishedList = document.querySelector(".finished_list");


let pending = [];
let finished = [];


function pendingToDos() {
  const stringToDo = JSON.stringify(pending);
  localStorage.setItem("Pending", stringToDo);
}

function finishedToDos(){
  const stringToDo = JSON.stringify(finished);
  localStorage.setItem("Finished", stringToDo);
}

function savePendingToDo(text) {
  const toDoObject = {
    id: pending.length + 1,
    value: text
  };
  pending.push(toDoObject);
  pendingToDos();
}

function saveFinishedToDo(text) {
  const toDoObject = {
    id: finished.length + 1,
    value: text
  };
  finished.push(toDoObject);
  finishedToDos();
}

function handleDeletePending(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoId = li.id;
  ul.removeChild(li);
  pending = pending.filter(function(toDo) {
    return toDo.id !== parseInt(toDoId);
  });
  pendingToDos();
}

function handleDeleteFinished(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoId = li.id;
  ul.removeChild(li);
  finished = finished.filter(function(toDo) {
    return toDo.id !== parseInt(toDoId);
  });
  finishedToDos();
}


function addPendingToDo(text) {
  const toDo = document.createElement("li");
  toDo.className = "toDo";
  toDo.id = pending.length + 1;

  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "toDo__deleteBtn";
  deleteBtn.addEventListener("click", handleDeletePending);

  const finishBtn = document.createElement("span");
  finishBtn.innerHTML = "✅";
  finishBtn.className = "toDo__finishBtn"
  finishBtn.addEventListener("click", () => {
  addFinishedToDo(text);
  });
  finishBtn.addEventListener("click", handleDeletePending);

  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.appendChild(deleteBtn);
  toDo.appendChild(finishBtn);
  toDo.appendChild(label);
  pendingList.appendChild(toDo);
  savePendingToDo(text);
}

function addFinishedToDo(text){
  const toDo = document.createElement("li");
  toDo.className = "toDo";
  toDo.id = finished.length + 1;

  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "toDo__deleteBtn";
  deleteBtn.addEventListener("click", handleDeleteFinished);

  const finishBtn = document.createElement("span");
  finishBtn.innerHTML = "⏪";
  finishBtn.className = "toDo__finishBtn"
  finishBtn.addEventListener("click", () => {
    addPendingToDo(text);
    });
    finishBtn.addEventListener("click", handleDeleteFinished);

  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.appendChild(deleteBtn);
  toDo.appendChild(finishBtn);
  toDo.appendChild(label);
  finishedList.appendChild(toDo);
  saveFinishedToDo(text);
}

function onSubmit(event) {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addPendingToDo(value);
}

function loadPendingToDos() {
  const loadedToDos = localStorage.getItem("Pending");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      addPendingToDo(toDo.value);
    });
  }
  return;
}

function loadFinishedToDos() {
  const loadedToDos = localStorage.getItem("Finished");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      addFinishedToDo(toDo.value);
    });
  }
  return;
}

function init() {
  loadPendingToDos();
  loadFinishedToDos();
}

form.addEventListener("submit", onSubmit);

init();