const testAddTask = (task) => {
  const arrList = [];
  if (task === null || task === '') return;
  arrList.push({
    description: task,
    completed: false,
    index: arrList.length,
  });

  const DOMMOCK = `<ul>${arrList.map(
    (item) => `<li>${item.description}</li>`
  )}</ul>`;
  return DOMMOCK;
};

testAddTask('Buy Ferrary');
export default testAddTask;
