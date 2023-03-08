const btn = document.querySelector('[data-form-btn]');
//console.log(btn)

// Evento Listener
btn.addEventListener('click', function () {
    console.log('crear tarea');
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
});
