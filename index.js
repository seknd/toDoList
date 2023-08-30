
const todoList = [{
    name: '',
    duedate: ''
}] 


renderTodoList();

function add() {                                                                 //add function

    const inputElement = document.querySelector('.js-todoS')
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date');
    const duedate = dateInputElement.value;

    todoList.push({
        
        name,
        duedate
    });


    inputElement.value = ''

    renderTodoList();

}

function renderTodoList() {                                                     //render
     let todoListHTML = '';
    

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
    //    const name = todoObject.name;
    //    const duedate = todoObject.duedate
        const { name, duedate } = todoObject
        const html = `
        <div class="taskDiv">    
            
        <div>${name}</div>
            
        <div>${duedate}</div>
      
        <p>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>
            
        </p>

      </div>
    `;
        todoListHTML += html;
       
        
     }
    
    

    document.querySelector('.js-List').innerHTML = `
    <h2>Basic tasks</h2>
    ${todoListHTML}`;
   
    }





//================================================================================important===========================================================================================================//

const todoListImportant = [{
    nameI: '',
    duedateI: ''
}] 

renderTodoListImportant();

function addToImportant() {                                                                 //add important

    const inputElement = document.querySelector('.js-todoS')
    const nameI = inputElement.value;

    const dateInputElement = document.querySelector('.js-date');
    const duedateI = dateInputElement.value;

    todoListImportant.push({
        nameI,
        duedateI
    });

    inputElement.value = ''

    renderTodoListImportant();
}


function renderTodoListImportant() {                                                        //renderTodoListImportant                              

        let todoListHTML = '';

        for (let i = 0; i < todoListImportant.length; i++) {
            
            const todoObject = todoListImportant[i];
            const { nameI, duedateI } = todoObject
           
            const html = `
        <div class="taskDiv">    
            
        <div>${nameI}</div>
            
        <div>${duedateI}</div>
      
        <p>
            <button onclick="
                todoListImportant.splice(${i}, 1);
                renderTodoListImportant();
            " class="delete-todo-button">Delete</button>
      
            
        </p>

      </div>
    `;
    todoListHTML += html;


        }



        
    document.querySelector('.js-ListImportant').innerHTML = `
    <h2>Important tasks</h2>
    ${todoListHTML}`;
}







