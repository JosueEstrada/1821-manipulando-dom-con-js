const btn = document.querySelector('[data-form-btn]');
//console.log(btn)
const createTask = (e) => {
    e.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
    document.querySelector('.task').textContent = input.value;
}
// Evento Listener
btn.addEventListener('click', createTask);
