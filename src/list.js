  
export default function listJS (arrList, render, save) {
const input = document.querySelector('.add-input');
const addForm = document.querySelector('#add-form');

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const task = input.value;
    if((task === null) || (task === '')) return;
    arrList.push({description:task, completed: false, index:arrList.length});
    input.value = null;
    render();
    save();
})

}
