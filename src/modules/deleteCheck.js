export default function deleteCheck(ev, arrList, render, save, refresh) {
  const elipseBtn = document.querySelectorAll('.elipse-btn');
  const trashBtn = document.querySelectorAll('.trash-btn');
  const item = ev.target;
  if (item.classList[0] === 'check') {
    const index = item.id;
    const parent = item.parentElement;
    parent.classList.toggle('line-through');

    elipseBtn[index].classList.toggle('hide');
    trashBtn[index].classList.toggle('hide');
    arrList[index].completed = !arrList[index].completed;
    save();
  }
  if (item.classList[0] === 'trash-btn') {
    const index = item.previousElementSibling.id;
    const parent = item.parentElement;
    parent.remove();
    arrList.splice(index, 1);
    arrList.forEach((object, index) => {
      object.index = index;
    });
    save();
    render();
    refresh();
  }
}