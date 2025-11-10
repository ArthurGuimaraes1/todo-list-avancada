import { renderTasks, addTask, deleteTask } from './taskManager.js';

const taskContainer = document.querySelector('.task-container');
const addButton = document.querySelector('#button-add');

renderTasks(taskContainer);

addButton.addEventListener('click', () => {
  const input = document.querySelector('#task-input');
  if (input.value.trim()) {
    addTask(taskContainer, input.value.trim());
    input.value = '';
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('button-delete')) {
    const taskItem = e.target.closest('.task-item');
    deleteTask(taskContainer, taskItem);
  }
});
