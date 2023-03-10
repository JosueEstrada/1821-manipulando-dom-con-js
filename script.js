const btn = document.querySelector('[data-form-btn]');
//console.log(btn)
const createTask = (e) => {
    e.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    // Select parent element
    const list = document.querySelector('[data-list]');
    // Create child element
    const task = document.createElement('li');
    // Add classes to child element
    task.classList.add('card');
    input.value = '';
    const content = `<div>
                        <i class="far fa-check-square icon"></i>
                        <span class="task">${value}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;
    // Add child element to parent element
    list.appendChild(task);
    console.log(content);
}
// Evento Listener
btn.addEventListener('click', createTask);
