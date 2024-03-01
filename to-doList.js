
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("#addTask").onsubmit = function (event){
        event.preventDefault();
        const li = document.createElement('li');

        let task_text=document.querySelector("#nameOfTask").value;
        let new_task_html = `  <span> ${task_text} </span>
                           
                            <button class = "remove btn btn-sm btn-outline-primary"> Remove </button>
                            <div class="mt-3">
                            <label for="task_priority">Priority:</label>
                            <select id="priority" name="task_priority">
                             <option value="low"> Low </option>
                             <option value="medium"> Medium </option>
                             <option  value="high"> High </option>
                             </select>
                             </div>
                             <div class="mt-3"
                             <label for="task_status"> Status: </label>
                             <input type="radio" id="status-completed" name="task_status" class="if-completed"> Completed
                             <input type = "radio" id"status-pending" name="task_status" class="pending">Pending
                             </div>
                             <br>            
                             
                           
                             `;

        li.innerHTML = new_task_html
        document.querySelector("#task-list").append(li);
       document.querySelector("#nameOfTask").value = '';
        return false;               

    }

    document.addEventListener('click', function(event){
        element = event.target;
        if(element.classList.contains('remove')){
            element.parentElement.remove();
        }
    })

    document.addEventListener('click', function(event){
        element= event.target;
        if(element.classList.contains('if-completed')){
            const taskItem = element.closest('li');
            taskItem.querySelector('span').style.textDecoration="line-through";
        }
    })       
    
});