
const todoList = [{
    name: 'add your tasks',
    duedate: 'and add date'
}] 


renderTodoList();

function renderTodoList() {
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
      <p><button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
      
      <button class="higer-todo-button" onclick="
      alert('not yet developed')

      ">set to important</button> </p>
      </div>
    `;
        todoListHTML += html;
        
     }
    
 
    document.querySelector('.js-List').innerHTML = todoListHTML;
  
    }
function add() {

    const inputElement = document.querySelector('.js-todoS')
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date');
    const duedate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        duedate
    });


    inputElement.value = ''

    renderTodoList();

}
