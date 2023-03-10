import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector('[data-form-btn]');
const createTask = (e) => {
    e.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    input.value = '';
    // Select parent element
    const list = document.querySelector('[data-list]');

    // Create child element
    const task = document.createElement('li');
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');

    // Add classes to child element
    task.classList.add('card');
    titleTask.classList.add('task');

    // Modify values
    titleTask.innerText = value;

    // Add child element to parent element
    list.appendChild(task);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    //console.log(content);
};
// Evento Listener
btn.addEventListener('click', createTask);