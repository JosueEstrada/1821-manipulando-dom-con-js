// Immediately Invoked Function Expression
( () => {
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

// Crear arrow function para el icono del check
    const checkComplete = () => {
        const i = document.createElement('i');
        i.classList.add('far', 'fa-check-square', 'icon');
        i.addEventListener('click', completeTask);
        return i;
    };

// Arrow function para cambiar el icono y color para tarea completada
    const completeTask = (event) => {
        // Encontrar el objetivo del evento utilizando la propiedad
        const element = event.target;
        element.classList.toggle('fas');
        element.classList.toggle('far');
        element.classList.toggle('completeIcon');
    };

    // Arrow function para delete icon
    const deleteIcon = (event) => {
        const i = document.createElement('i');
        i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
        i.addEventListener('click', deleteTask);
        return i;
    };

    const deleteTask = (event) => {
        // Seleccionar el elemento padre del target
        const parent = event.target.parentElement;
        parent.remove();
    };
})();