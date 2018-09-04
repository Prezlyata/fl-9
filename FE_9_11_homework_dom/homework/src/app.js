let tasks = [];

function Task(task){
    this.task = task;
}

function addTask() {
    let ten = 10;
    let task = document.getElementById('text').value;
    let newTask = new Task(task);
    if (task === '') {
        alert('Input text in field')
    } else {
        if(tasks.length <= ten) {
            tasks.push(newTask);
            reset();
            renderList(tasks);
        } else {
            alert('Add > 10')
        }
    }
}

function reset(){
    let task = document.getElementById('text').value = '';
}

function renderList(tasks) {
    let html = '<ul class="list">';
    for (let i = 0; i < tasks.length; i++) {
        html += '<li class="task">'+'<div class="task-name">'+
        '<input class="checkbox" type="checkbox">' + 
        '<span>' + tasks[i].task + '</span>' + '</div>' + 
        '<button class="remove" id="' + i + '">' + '<i class="material-icons">' +
        'delete'+
        '</i>' + '</button></li>';
    }
    html += '</ul>';
    document.getElementById('list').innerHTML = html;

    let buttons = document.getElementsByClassName('remove');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

function remove() {
    let one = 1;
    let id = this.getAttribute('id');
    tasks.splice(id, one);
    renderList(tasks);
    return false;
}
