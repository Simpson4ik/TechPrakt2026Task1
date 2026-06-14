import './style.css'

document.querySelector('#app').innerHTML = `
  <div style="font-family: sans-serif; padding: 20px; max-width: 400px; margin: 0 auto;">
    <h2>Трекер завдань</h2>
    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
      <input type="text" id="taskInput" placeholder="Що потрібно зробити?" style="flex-grow: 1; padding: 8px; font-size: 16px;" />
      <button id="addButton" style="padding: 8px 16px; font-size: 16px; cursor: pointer;">Додати</button>
    </div>
    <ul id="taskList" style="list-style-type: none; padding: 0;"></ul>
  </div>
`

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    
    li.style.cursor = 'pointer';
    li.style.margin = '10px 0';
    li.style.padding = '10px';
    li.style.backgroundColor = '#f4f4f9';
    li.style.borderRadius = '5px';
    li.style.transition = '0.2s';
    li.style.color = '#333';

    li.addEventListener('click', () => {
      if (li.style.textDecoration === 'line-through') {
        li.style.textDecoration = 'none';
        li.style.color = '#333';
        li.style.backgroundColor = '#f4f4f9';
      } else {
        li.style.textDecoration = 'line-through';
        li.style.color = '#999';
        li.style.backgroundColor = '#e0e0e0';
      }
    });

    taskList.appendChild(li);
    taskInput.value = '';
  }
});

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addButton.click();
  }
});