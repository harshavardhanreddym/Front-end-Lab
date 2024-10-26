document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    // Add task function
    addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    // Create Remove Button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-button';
    removeButton.onclick = function() {
    taskList.removeChild(li);
    };
    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = ''; // Clear input field
    }
    });
    // Allow pressing "Enter" key to add task
    taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
    addButton.click();
    }
    });
    });