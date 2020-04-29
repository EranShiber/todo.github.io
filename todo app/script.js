
// Local storage ( bugged where you can only save one todo at time)

// window.addEventListener('load', (e) => {
// let coockieTodo = localStorage.getItem("todo")
// let coockieIsCompleted = localStorage.getItem("completed")

// if(coockieTodo > "") {
//     let li = document.createElement('li');
//     let delBtn = document.createElement('button')
//     delBtn.innerHTML = "Delete"
//     let completedBtn = document.createElement('button');
//     completedBtn.innerHTML = "Completed"
//     li.innerHTML = coockieTodo
//     li.appendChild(delBtn)
//     li.appendChild(completedBtn)
//     ul.appendChild(li)
// }
// })


const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const selector = document.querySelector('select')

const todos = [];





// When submiting =>


form.addEventListener('submit', formSubmit);

function formSubmit(x) {
    x.preventDefault()
    if(input.value === "") {

    } else {
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
    if(e.target.classList.value === "del"){
        todos.splice([e.target.parentNode.id - 1], 1);
        e.target.parentNode.remove();
    }
})


// Marking as completed:

ul.addEventListener("click", (e) => {
    if (e.target.classList.value === "completed"){

        if (e.target.innerHTML === "Completed"){
            e.target.parentNode.style = "text-decoration: line-through"
            e.target.parentNode.style = "opacity: 0.4"
            e.target.parentNode.classList += " complete"
            e.target.innerHTML = "Undo"   
        } else if (e.target.innerHTML !== "completed") {
            e.target.parentNode.style = "text-decoration: none"
            e.target.innerHTML = "Completed" 
            e.target.parentNode.classList = "todo"
        }

    }

    if (todos[e.target.parentNode.id - 1].completed === false) {
        todos[e.target.parentNode.id - 1 ].completed = !false

    } else {
        todos[e.target.parentNode.id - 1 ].completed = false;
    }
})


// filtering todos

selector.addEventListener("click", (x) => {
    const tasks = ul.childNodes;
    tasks.forEach(x => {

        if(x.style){
            switch(selector.value){
                case "all":
                    x.style.display = "flex";
                    break;
                    case "complete":
                        if(x.classList.contains("complete")){
                            
                            x.style.display = "flex";
                        } else {
                            x.style.display = "none";
                        }
                        break;
                        case "uncomplete":
                            if(x.classList.contains("complete")){
                            
                                x.style.display = "none";
                            } else {
                                x.style.display = "flex";
                            }   

            }

        } else {

        }
    })

 

})