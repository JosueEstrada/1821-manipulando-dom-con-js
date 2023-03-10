// Crear arrow function para el icono del check
const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
};

// Arrow function para cambiar el icono y color para tarea completada
const completeTask = (event) => {
    // Encontrar el objetivo del evento utilizando el método target
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('far');
    element.classList.toggle('completeIcon');
};
export default checkComplete;