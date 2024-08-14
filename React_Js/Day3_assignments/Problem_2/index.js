const { useState } = React;
const FormData = () => {
    const [hobbies, setHobbies] = useState(['']); // Initial state with one empty string for the first input field

    const handleChange = (index, event) => {
        const newHobbies = [...hobbies];
        newHobbies[index] = event.target.value;
        setHobbies(newHobbies);
    };

    const addHobby = () => {
        setHobbies([...hobbies, '']);
    };

    const removeHobby = (index) => {
        const newHobbies = hobbies.filter((_, i) => i !== index);
        setHobbies(newHobbies);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(hobbies);
    };

    return (
        <form onSubmit={handleSubmit}>
            {hobbies.map((hobby, index) => (
                <div key={index} style={{ marginBottom: '8px' }}>
                    <input
                        type="text"
                        placeholder="Enter a hobby"
                        value={hobby}
                        onChange={(event) => handleChange(index, event)}
                        style={{ marginRight: '8px' }}
                    />
                    {hobbies.length > 1 && index !== 0 && (
                        <button type="button" onClick={() => removeHobby(index)}>
                            Remove
                        </button>
                    )}
                </div>
            ))}
            <button type="button" onClick={addHobby} style={{ marginRight: '8px' }}>
                Add Hobby
            </button>
            <button type="submit">Submit</button>
        </form>
    );
};

const App = () => {
    return (
        <div>
            <h1>Hobby Form</h1>
            <FormData />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);