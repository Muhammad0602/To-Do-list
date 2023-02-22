import _ from 'lodash';
import './style.css';

//  --------------- tasks array---------------

let arrList = [
   {
      description: 'Repeat your science task',
      completed: false,
      index: 0,
    },
    {
      description: 'Learn smth new in Arabic',
      completed: false,
      index: 1,
    },
    {
      description: 'get enough sleep',
      completed: false,
      index: 2,
    }
]
// -------------------------- function which populates task to HTML-----------------------
const list = document.querySelector('.my-list');

function populateTask () {

   const title = document.createElement('div');
   title.innerHTML = `<h3 class="title">Today's To Do</h3>`;
   title.classList.add('border-bottom');
   list.appendChild(title);
  
   const addInput = document.createElement('div');
   addInput.innerHTML = `<input class="add-input" placeholder="Add to your list..."></input>`
   addInput.classList.add('border-bottom');
   list.appendChild(addInput);

   arrList.forEach((task) => {
      const listItem = document.createElement('div');
      listItem.innerHTML = `
      <input type="checkbox" id="listItem"></input>
      <label for="listItem">${task.description}</label>`;
      listItem.classList.add('border-bottom');
      list.appendChild(listItem);
  })

   const clearAllDone = document.createElement('div');
   clearAllDone.innerHTML = `<button class="btn">Clear all completed</button>`
   list.appendChild(clearAllDone);
}

document.addEventListener('DOMContentLoaded', populateTask());