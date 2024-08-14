const apiUrl = "http://localhost:8080/todos"
const App = () => {
    const [tasks, setTasks] = React.useState([]);
    const [formData, setFormData] = React.useState({ title: '', isCompleted: false, assignee: '' });
    const [filter, setFilter] = React.useState('');

    // Fetch all tasks from the server
    const getAllTasks = async () => {
      try {
        const response = await axios.get(apiUrl);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    // Handle form input changes
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    };

    // Add a new task
    const addTask = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(apiUrl, formData);
        setTasks([...tasks, response.data]);
        setFormData({ title: '', isCompleted: false, assignee: '' });
      } catch (error) {
        console.error('Error adding task:', error);
      }
    };

    // Update an existing task
    const updateTask = async (id) => {
      try {
        const updatedTask = await axios.put(`${apiUrl}/${id}`, formData);
        setTasks(tasks.map(task => task.id === id ? updatedTask.data : task));
        setFormData({ title: '', isCompleted: false, assignee: '' });
      } catch (error) {
        console.error('Error updating task:', error);
      }
    };

    // Delete a task
    const deleteTask = async (id) => {
      try {
        await axios.delete(`${apiUrl}/${id}`);
        setTasks(tasks.filter(task => task.id !== id));
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    };

    // Filter incomplete tasks
    const showIncompleteTasks = () => {
      setFilter('incomplete');
    };

    // Filter tasks by assignee
    const filterByAssignee = (assignee) => {
      setFilter(assignee);
    };

    const filteredTasks = tasks.filter(task => {
      if (filter === 'incomplete') return !task.isCompleted;
      if (filter) return task.assignee === filter;
      return true;
    });

    return (
      <div>
        <h1>Advanced Task Manager</h1>

        <form onSubmit={addTask}>
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <br/>
          <label>
            Completed: 
            <input
              type="checkbox"
              name="isCompleted"
              checked={formData.isCompleted}
              onChange={handleChange}
            />
          </label>
          <br/>
          <input
            type="text"
            name="assignee"
            placeholder="Assignee"
            value={formData.assignee}
            onChange={handleChange}
            required
          />
          <br/>
          <button type="submit">Add Task</button>
        </form>

        <br/>
        <button onClick={getAllTasks}>Get All Tasks</button>
        <button onClick={showIncompleteTasks}>Show Incomplete Tasks</button>
        <button onClick={() => filterByAssignee('John Doe')}>Filter by Assignee: John Doe</button>
        <button onClick={() => filterByAssignee('')}>Clear Filter</button>

        <ul>
          {filteredTasks.map(task => (
            <li key={task.id}>
              <strong>{task.title}</strong> - Assigned to: {task.assignee} - Status: {task.isCompleted ? 'Completed' : 'Incomplete'}
              <br/>
              <button onClick={() => updateTask(task.id)}>Update</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);