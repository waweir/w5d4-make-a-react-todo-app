import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// Your code goes here
var todos = []
var taskInput = document.querySelector('#taskInput')

var addTodo = function() {
    if (taskInput.value != '') {
        todos.push(taskInput.value)
        taskInput.value = ''
        renderView(todos.sort())
        addButtonEvents()
    }
}

var addButtonEvents = function() {
    var buttons = document.querySelectorAll('.todoItem .button')
    buttons.forEach(function(button, i) {
        button.addEventListener('click', function() {
            if (button.classList.contains('complete')) {
                this.classList.remove('complete')
                this.classList.add('completeChecked')
                this.parentNode.previousSibling.parentNode.classList.add('taskComplete')
            } else if (button.classList.contains('remove')) {
                this.classList.remove('remove')
                var hide = this.parentNode.previousSibling.parentNode
                // console.log(hide.className)
                hide.classList.remove('fadeInDown')
                hide.classList.add('fadeOutUp')
                setTimeout(function() {
                    hide.style.display = 'none'
                }, 550)
            }
        })
    })
}

// events for buttons and input
document.querySelector('#addTask').addEventListener('click', addTodo)
document.querySelector('#taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo()
    }
})
document.querySelector('#clearInput').addEventListener('click', function() {
    taskInput.value = ''
})


function renderView(todos) {
    ReactDOM.render(
        <Todos data={todos} />,
        document.getElementById('todos')
    )
}
