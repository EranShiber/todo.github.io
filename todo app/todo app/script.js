
// Local storage ( bugged where you can only save one todo at time)

window.addEventListener('load', (e) => {
    if (localStorage.getItem('todos' === null)) {
    } else {
        setStorageUi()
    }
})

const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const selector = document.querySelector('select')
const todos = [];

// When submiting =>


form.addEventListener('submit', formSubmit);
function formSubmit(x) {
    x.preventDefault()
    if (input.value === "") {
    } else {

        // Adding todo to the main array
        saveAndCheckStorage(input.value)
        todos.push({
            completed: false,
            todo: input.value,
            index: todos.length
        })


        // Adding to the the DOM + creating buttons

        let li = document.createElement('li');
        let delBtn = document.createElement('button')
        let completedBtn = document.createElement('button');
        let dateSent = document.createElement("p");
        dateSent.innerHTML = new Date()
        li.classList = "todo"
        delBtn.innerHTML = "Delete"
        delBtn.classList = "del"
        dateSent.classList = "date"
        completedBtn.classList = "completed"
        completedBtn.innerHTML = "Completed"
        li.innerHTML = ` <p class="userText"> ${todos[todos.length - 1].todo} </p>`
        li.id = todos.length
        li.appendChild(dateSent)
        li.appendChild(delBtn)
        li.appendChild(completedBtn)
        ul.appendChild(li)

        input.value = '';
    }
}


// Deleting todos & removing the todo from the array:

ul.addEventListener("click", (e) => {
    if (e.target.classList.value === "del") {
        deleteStorage(e.target.parentNode.childNodes[1])
        e.target.parentNode.classList += " deleted"
    }
})


// Marking as completed:

ul.addEventListener("click", (e) => {
    if (e.target.classList.value === "completed") {

        if (e.target.innerHTML === "Completed") {
            e.target.parentNode.style = "opacity: 0.4"
            e.target.parentNode.classList += " complete"
            e.target.innerHTML = "Undo"
        } else if (e.target.innerHTML !== "completed") {
            document.querySelector('.userText').style = "text-decoration: none";
            e.target.parentNode.style = "opacity: 1"
            e.target.innerHTML = "Completed"
            e.target.parentNode.classList = "todo"
        }
    }
})


// filtering todos

selector.addEventListener("click", (x) => {
    const tasks = ul.childNodes;
    tasks.forEach(x => {

        if (x.style) {
            switch (selector.value) {
                case "all":
                    x.style.display = "flex";
                    break;
                case "complete":
                    if (x.classList.contains("complete")) {

                        x.style.display = "flex";
                    } else {
                        x.style.display = "none";
                    }
                    break;
                case "uncomplete":
                    if (x.classList.contains("complete")) {

                        x.style.display = "none";
                    } else {
                        x.style.display = "flex";
                    }
            }
        } else {
        }
    })
})

//  Local storage
// Cheaking if there are any todos:

function saveAndCheckStorage(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}


// Removing todo from the local storage:

function deleteStorage(todo) {
    let todos = localStorage.getItem("todos");
    todos = JSON.parse(todos);
    let removedTodo = todos.indexOf(todo.innerText);
    todos.splice(removedTodo, 1)
    localStorage.setItem("todos", JSON.stringify(todos));
}



// Injecting the todos into the DOM:

function setStorageUi() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = localStorage.getItem("todos")
    }
    todos = JSON.parse(todos);
    todos.forEach(todo => {
        let li = document.createElement('li');
        let delBtn = document.createElement('button')
        let completedBtn = document.createElement('button');
        let dateSent = document.createElement("p");
        dateSent.innerHTML = new Date()
        li.classList = "todo"
        delBtn.innerHTML = "Delete"
        delBtn.classList = "del"
        dateSent.classList = "date"
        completedBtn.classList = "completed"
        completedBtn.innerHTML = "Completed"
        li.innerHTML = ` <p class="userText"> ${todo} </p>`
        li.id = todos.length
        li.appendChild(dateSent)
        li.appendChild(delBtn)
        li.appendChild(completedBtn)
        ul.appendChild(li)
    })
}

