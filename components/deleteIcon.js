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
export default deleteIcon;