document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    let tasks = [];
    let darkMode = false;

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = task;
            li.appendChild(span);

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.classList.add('edit-btn');
            editBtn.addEventListener('click', () => editTask(index));
            li.appendChild(editBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => deleteTask(index));
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
        });
    }

    // Function to add a new task
    function addTask() {
        const task = taskInput.value.trim();
        if (task !== '') {
            tasks.push(task);
            taskInput.value = '';
            renderTasks();
        }
    }

    // Function to edit a task
    function editTask(index) {
        const newTask = prompt('Edit your task:', tasks[index]);
        if (newTask !== null && newTask.trim() !== '') {
            tasks[index] = newTask.trim();
            renderTasks();
        }
    }

    // Function to delete a task
    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    // Function to toggle theme
    function toggleTheme() {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
        themeToggleBtn.textContent = darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }

    // Event listener for the add task button
    addTaskBtn.addEventListener('click', addTask);

    // Event listener for pressing Enter key to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Event listener for theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Initial render
    renderTasks();
});
