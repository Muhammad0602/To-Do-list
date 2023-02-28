export default function edit(label, index, arrList, save, editInput) {
  label.classList.add('hide');
  editInput[index].classList.remove('hide');
  editInput[index].focus();
  editInput[index].addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && editInput[index].value !== '') {
      label.textContent = editInput[index].value;
      editInput[index].classList.add('hide');
      label.classList.remove('hide');
      arrList[index].description = editInput[index].value;
      save();
    }
  });

  editInput[index].addEventListener('focusout', () => {
    editInput[index].classList.add('hide');
    label.classList.remove('hide');
  });
}