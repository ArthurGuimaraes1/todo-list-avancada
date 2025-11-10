export function createTaskElement(taskText) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');

  const span = document.createElement('span');
  span.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('button-delete');
  deleteButton.textContent = 'Excluir';

  taskItem.append(span, deleteButton);
  return taskItem;
}
