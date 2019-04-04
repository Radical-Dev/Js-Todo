const todoApp = document.getElementById("appContain");
let clseBtn = document.getElementById("close");
const todoSave = document.querySelector(".todoModal .modal-button");
const devSave = document.getElementById("devModal--save");


const ui=new UI();
document.addEventListener("DOMContentLoaded",UI.updateList);
todoApp.addEventListener("click", e => {
    UI.showTaskModal(e.target);
});
clseBtn.addEventListener("mousedown",ui.hideTaskModal);
todoSave.addEventListener("mousedown", ui.saveTasks);
devSave.addEventListener("mousedown",ui.saveDevTasks);

todoApp.addEventListener("mousedown",e =>{
    UI.deleteTodoFromUI(e.target);
    // console.log(e.target.parentNode);
    // console.log(e.target.parentElement.parentElement.firstElementChild.textContent);
    ui.deleteItem(e.target,e.target.parentElement.parentElement.firstElementChild.textContent);
    // ui.deleteItem(e.target.parentElement.PrevioudElementSibling.textContent);
});
