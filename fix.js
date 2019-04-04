class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }



class UI{
    addTodo(){
        
    }

    showTaskModal(){
        let overlay = document.querySelector(".overlay");
        let modal = document.querySelector(".todoModal");
        overlay.setAttribute("display", "block");
        overlay.style.display="block";
        modal.setAttribute("display", "block");
        modal.style.display="block";
    }

    hideTaskModal(){
        let overlay = document.querySelector(".overlay");
        let modal = document.querySelector(".todoModal");
        overlay.style.display="none";
        modal.style.display="none";
    }

   
    static addToLocalStorage(task,taskPriority){
        let list;
        if(window.localStorage.getItem("todo")===null){
            list = [];
        }
        else{
            list = JSON.parse(localStorage.getItem("todo"));
        }
        list.push({"TaskName": task, "Priority":taskPriority});
        localStorage.setItem("todo",JSON.stringify(list));
    }
    saveTasks(){
        const taskName= document.getElementById("todoName").value;
        const taskPriority= document.getElementById("todoPriority").value;
        // console.log(`${taskName} ${taskPriority}`);
        // const entry = document.createElement("div");
        // entry.innerHTML = `<li class = "${taskPriority}"> ${taskName} ${taskPriority}</li>`;
        const list = document.getElementById("todoList");
        list.innerHTML += `<li class = "${taskPriority} collection-item"> <div> ${taskName} ${taskPriority} <a class="secondary-content"><i class="material-icons">send</i></a></li>`;
        console.log(list);
        
        UI.addToLocalStorage(taskName,taskPriority);
    }
    static updateList(){
        let list = UI.getTodo();
        
        const listing = document.getElementById("todoList");
        list.forEach(entry => {
            console.log(entry['TaskName']);
            
            listing.innerHTML += `<li class = "${entry['Priority']} collection-item"> <div> <span>${entry['TaskName']} </span> <a class="secondary-content completeBtn"><i class="material-icons">done</i></a><a class="secondary-content"><i class="material-icons red-text deleteBtn">remove_circle</i></a></div></li>`;
            console.log(list);
        });
    }
    static getTodo(){
        let list;
        if(localStorage.getItem("todo")===null){
            list = [];
        }
        else{
            list = JSON.parse(localStorage.getItem("todo"));
        }
        console.log(`Ui .getTodo Returns: ${list}`);
        return list;
    }

    deleteItem(entryTitle){
        console.log(typeof entryTitle);
        let list = UI.getTodo();
        console.log(list);
        list.forEach( (entry,index,array) =>{
            console.log(array);
        });
        //localStorage.setItem("todo",JSON.stringify(list));
    }

    static deleteTodoFromUI(target){
        if(target.classList.contains("deleteBtn")){
            target.parentElement.parentElement.parentElement.remove();
        }
    }


    
}
