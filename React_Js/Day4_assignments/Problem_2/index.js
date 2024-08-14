const init ={
    title:"",
    status:false,
    assignedTo:""
}
const ToDoList = () => {
    const [data, setData] = React.useState(init);
    const [todoList, setTodoList] = React.useState([]);

    const handleChange = (e) => {
      const { name } = e.target;
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setData({
        ...data,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setTodoList([...todoList, data]);
      setData(init);
    };

    const handleDelete = (index) => {
      const updatedList = todoList.filter((_, i) => i !== index);
      setTodoList(updatedList);
    };

    return (
      <div>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="title"
            value={data.title}
            placeholder="Enter Title"
            onChange={handleChange}
          />
          <br />
          <label>Completed Status:</label>
          <input
            type="checkbox"
            name="status"
            checked={data.status}
            onChange={handleChange}
          />
          <br />
          <select
            onChange={handleChange}
            value={data.assignedTo}
            name="assignedTo"
          >
            <option value="">Select Name</option>
            <option value="virendra">Virendra</option>
            <option value="Radhika">Radhika</option>
            <option value="Gorang">Gorang</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <div className="todoList">
            <h2>To-Do List</h2>
        <ul className="ulList">
          {todoList.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> - Assigned to: {item.assignedTo} - Status:{" "}
              {item.status ? "Completed" : "Incomplete"}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
        </div>
        
      </div>
    );
  };

  const App = () => {
    return <ToDoList />;
  };


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);