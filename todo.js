class Todo {
    constructor(title, priority) {
      this.title = title;
      this.priority = priority;
    }
  }
  class Dev {
    constructor(title) {
      this.title = title;
    }
  }


class UI{
    addTodo(){
        
    }

    static showTaskModal(target){
        if(target.classList.contains("todoBtn") && target.classList.contains("taskModal") ){
            let overlay = document.querySelector(".overlay");
            let modal = document.querySelector(".todoModal");
            overlay.setAttribute("display", "block");
            overlay.style.display="block";
            modal.setAttribute("display", "block");
            modal.style.display="block";
        }
        else if(target.classList.contains("todoBtn") && target.classList.contains("devMdl") ){
            let overlay = document.querySelector(".overlay");
            let modal = document.querySelector(".devModal");
            overlay.setAttribute("display", "block");
            overlay.style.display="block";
            modal.setAttribute("display", "block");
            modal.style.display="block";
        }
    }

    hideTaskModal(){
        let overlay = document.querySelector(".overlay");
        let modal = document.querySelector(".todoModal");
        let modal2 = document.querySelector(".devModal");
        overlay.style.display="none";
        modal.style.display="none";
        modal2.style.display="none";
    }

   
    static addToLocalStorage(todo){
        let list = UI.getTodo();
       
        list.push(todo);
        localStorage.setItem('todo',JSON.stringify(list));
    }

    static addDevToLocalStorage(devTask){
        let list = UI.getDevList();
        list.push(devTask);
        localStorage.setItem('devList',JSON.stringify(list));
    }

    saveTasks(){
        const taskName= document.getElementById("todoName").value;
        const taskPriority= document.getElementById("todoPriority").value;
        // console.log(`${taskName} ${taskPriority}`);
        // const entry = document.createElement("div");
        // entry.innerHTML = `<li class = "${taskPriority}"> ${taskName} ${taskPriority}</li>`;
        const list = document.getElementById("todoList");
        list.innerHTML += `<li class = "${taskPriority} collection-item"> <div> <span>${taskName} </span> <a class="secondary-content completeBtn"><i class="material-icons">done</i></a><a class="secondary-content"><i class="material-icons red-text deleteBtn todoDelete">remove_circle</i></a></div></li>`;
        const todo=new Todo(taskName,taskPriority)
        UI.addToLocalStorage(todo);    
    }

    saveDevTasks(){
        const taskName= document.getElementById("devTodoName").value;
        const list = document.getElementById("devList");
        list.innerHTML += `<li class = "collection-item"> <div> <span>${taskName} </span> <a class="secondary-content completeBtn"><i class="material-icons">done</i></a><a class="secondary-content"><i class="material-icons red-text deleteBtn devDelete">remove_circle</i></a></div></li>`;  
        const dev= new Dev(taskName);  
        UI.addDevToLocalStorage(dev);
    }

    static updateList(){
        let list = UI.getTodo();
        let devList = UI.getDevList();
        
        const listing = document.getElementById("todoList");
        const devListing= document.getElementById("devList");
        list.forEach(entry => {
           // console.log(`this is from update method ${entry.title}`);
            
            listing.innerHTML += `<li class = "${entry.priority} collection-item"> <div> <span>${entry.title} </span> <a class="secondary-content completeBtn"><i class="material-icons">done</i></a><a class="secondary-content"><i class="material-icons red-text deleteBtn todoDelete">remove_circle</i></a></div></li>`;
           // console.log(list);
        });

        devList.forEach(entry => {
            devListing.innerHTML += `<li class = "collection-item"> <div> <span>${entry.title} </span> <a class="secondary-content completeBtn"><i class="material-icons">done</i></a><a class="secondary-content"><i class="material-icons red-text deleteBtn devDelete">remove_circle</i></a></div></li>`;
        })

    }
    static getTodo(){
        let list;
        if(localStorage.getItem('todo')===null){
            list = [];
        }
        else{
            list = JSON.parse(localStorage.getItem("todo"));
        }
        //console.log(`Ui .getTodo Returns: ${list}`);
        return list;
    }

    static getDevList(){
        let list;
        if(localStorage.getItem('devList')===null){
            list = [];
        }
        else{
            list = JSON.parse(localStorage.getItem("devList"));
        }
        //console.log(`Ui .getTodo Returns: ${list}`);
        return list;
    }

    deleteItem(target,entryTitle){
        if(target.classList.contains("deleteBtn") && target.classList.contains("todoDelete")){
           
        
        let list = UI.getTodo();
        let counter=0;
        
        Array.from(list).forEach( function(entry, index){
            let str = entryTitle;
           if(entry.title == str.trim()){
               list.splice(index,1)
           }
           });
        localStorage.setItem("todo",JSON.stringify(list));
        }

        else if(target.classList.contains("deleteBtn") && target.classList.contains("devDelete")){
            let list = UI.getDevList();
            let counter=0;
            
            Array.from(list).forEach( function(entry, index){
                counter+=1;
                console.log(`counter ${counter} ${entry.title}  ${entryTitle}`);
                let str = entryTitle;
                if(entry.title == str.trim()){
                    console.log("found it!!");
                    list.splice(index,1)
                }
           });
        localStorage.setItem("devList",JSON.stringify(list));
        }
    }

    static deleteTodoFromUI(target){
        if(target.classList.contains("deleteBtn")){
            target.parentElement.parentElement.parentElement.remove();
        }
    }


    
}
