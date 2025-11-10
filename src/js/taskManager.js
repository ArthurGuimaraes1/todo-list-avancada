import { getTasks, saveTasks } from './storage.js';
import { createTaskElement } from './taskFactory.js';

export function renderTasks(container) {
  const tasks = getTasks();
  tasks.forEach(taskText => {
    const taskItem = createTaskElement(taskText);
    container.appendChild(taskItem);
  });
}

export function addTask(container, taskText) {
  const tasks = getTasks();
  tasks.push(taskText);
  saveTasks(tasks);

  const taskItem = createTaskElement(taskText);
  container.appendChild(taskItem);
}

export function deleteTask(container, taskElement) {
  const taskText = taskElement.querySelector('span').textContent;
  const tasks = getTasks().filter(task => task !== taskText);
  saveTasks(tasks);
  taskElement.remove();
}
