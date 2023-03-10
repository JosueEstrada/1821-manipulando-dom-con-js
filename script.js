const btn = document.querySelector('[data-form-btn]');
//console.log(btn)
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
    console.log(checkComplete());


    const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    // Add child element to parent element
    list.appendChild(task);
    task.appendChild(taskContent);
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    //console.log(content);
}
// Evento Listener
btn.addEventListener('click', createTask);

// Crear arrow function para el icono del check
const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    return i;
}