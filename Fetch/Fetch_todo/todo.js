
const todoList = document.getElementById('todo-list');

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        data.forEach(todo => {
            // Create a list item for each todo
            const listItem = document.createElement('li');
            listItem.textContent = todo.title;
            
            // Append the list item to the todo list
            todoList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching todos:', error));
