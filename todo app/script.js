const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');


const todos = [];


// When submiting =>

form.addEventListener('submit', x => {
    x.preventDefault();
    

// Adding todo to the main array

todos.push({
    completed: false,
    todo: input.value,
    index: todos.length
})


// Adding to the the DOM + creating buttons

let li = document.createElement('li');
let delBtn = document.createElement('button')
let completedBtn = document.createElement('button');

delBtn.innerHTML = "Delete"
delBtn.classList = "del"
completedBtn.innerHTML = "Completed"

li.innerHTML = todos[todos.length - 1].todo;
li.id = todos.length
li.classList = "todo"
li.appendChild(delBtn)
li.appendChild(completedBtn)
ul.appendChild(li)



input.value = '';
})


// Deleting todos:

ul.addEventListener("click", (e) => {
    if(e.target.classList.value === "del"){
        todos.splice([e.target.parentNode.id - 1], 1);
        e.target.parentNode.remove();
    }
 
})

