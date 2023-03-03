import './style.css';
import listJS from './modules/list.js';
import deleteCheck from './modules/deleteCheck.js';
import edit from './modules/edit.js';

//  --------------- tasks array---------------
const LOCAL_STORAGE_LIST_KEY = 'tasks.list';
let arrList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

// -------------------------- function which populates task to HTML-----------------------

const list = document.querySelector('.my-list');

// function populateTask() {
const title = document.createElement('div');
title.innerHTML = '<h3 class="title">Today\'s To Do <i class=\'fas fa-sync\'></i></h3>';
title.classList.add('border-bottom');
list.appendChild(title);

const addInput = document.createElement('div');
addInput.innerHTML = `<form action="" id="add-form">
  <input class="add-input" placeholder="Add to your list..."></input>
  <button class="add-btn"><i class="fas fa-level-down-alt"></i></button>
  </form>`;

addInput.classList.add('border-bottom');
list.appendChild(addInput);

const listUl = document.createElement('table');
list.appendChild(listUl);

const clearAllDone = document.createElement('div');
clearAllDone.innerHTML = '<button class="delete-btn">Clear all completed</button>';
list.appendChild(clearAllDone);
// }

function render() {
  const listUl = document.querySelector('table');
  listUl.innerHTML = '';
  arrList.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="${task.completed ? 'line-through' : ''}">
        <input class="check" ${task.completed ? 'checked' : ''} type="checkbox" id="${task.index}"></input>
        <label class="text">${task.description}</label>
        <input class="editInput hide" type="text" placeholder="Edit your task"></input>
      </div>
      <button class="elipse-btn ${task.completed ? 'hide' : ''}" id="${task.index}"><i class="fa fa-ellipsis-v"></i></button>
      <button class="trash-btn ${task.completed ? '' : 'hide'}"><i class="fas fa-trash"></i></button>`;
    listItem.classList.add('border-bottom');
    listItem.classList.add('list-item');
    listUl.appendChild(listItem);
  });
}
render();

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(arrList));
}

//  -----------------Delete and check the task --------------------------
listUl.addEventListener('click', (ev) => {
  deleteCheck(ev, arrList, render, save, refresh);
});

// -------------------- Edit the content of the task------------------------------
function refresh() {
  const editInput = document.querySelectorAll('.editInput');
  const text = document.querySelectorAll('.text');
  text.forEach((label, index) => label.addEventListener('click', () => edit(label, index, arrList, save, editInput)));
}
// clear tasks that are completed

const deleteBtn = document.querySelector('.delete-btn');

deleteBtn.addEventListener('click', () => {
  const listsDone = arrList.filter((item) => item.completed === false);
  arrList = listsDone;
  arrList.forEach((object, index) => {
    object.index = index;
  });
  save();
  render();
  refresh();
});

listJS(arrList, render, save, refresh);
