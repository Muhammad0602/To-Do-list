const arrList = [];
let DOMMOCK = '';
const testAddTask = (task) => {
  if (task === null || task === '') return DOMMOCK;
  arrList.push({
    description: task,
    completed: false,
    index: arrList.length,
  });

  DOMMOCK = `<ul>${arrList.map(
    (item) => `<li>${item.description}</li>`,
  )}</ul>`;
  return DOMMOCK;
};

const testDeleteTask = (index) => {
  arrList.splice(index, 1);

  DOMMOCK = `<ul>${arrList.map(
    (item) => `<li>${item.description}</li>`,
  )}</ul>`;
  return DOMMOCK;
};

export { testAddTask, testDeleteTask };
