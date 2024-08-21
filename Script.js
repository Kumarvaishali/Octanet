document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div class="actions">
                <button class="complete">✔️</button>
                <button class="edit">✏️</button>
                <button class="delete">🗑️</button>
            </div>
        `;
        document.getElementById('task-list').appendChild(li);
        taskInput.value = '';

        li.querySelector('.complete').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.edit').addEventListener('click', () => {
            const newTaskText = prompt('Edit your task', taskText);
            if (newTaskText) {
                li.querySelector('span').textContent = newTaskText;
            }
        });

        li.querySelector('.delete').addEventListener('click', () => {
            li.remove();
        });
    }
}
