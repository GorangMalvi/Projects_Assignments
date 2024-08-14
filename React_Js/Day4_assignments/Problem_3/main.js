const users = [
    { id: 1, name: "John Doe", age: 30, location: "New York" },
    { id: 2, name: "Jane Smith", age: 25, location: "London" },
    { id: 3, name: "Sam Johnson", age: 35, location: "Sydney" },
    { id: 4, name: "Alice Brown", age: 28, location: "Toronto" },
];

const UserProfile = ({ name, age, location }) => {
    return (
        <div className="profile-card">
            <div className="profile-name">{name}</div>
            <div>Age: {age}</div>
            <div>Location: {location}</div>
        </div>
    );
};

const App = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [filteredUsers, setFilteredUsers] = React.useState(users);

    // Optimize search by using React.useMemo
    const handleSearch = React.useMemo(() => {
        return (e) => {
            const query = e.target.value.toLowerCase();
            setSearchQuery(query);
            setFilteredUsers(
                users.filter((user) =>
                    user.name.toLowerCase().includes(query)
                )
            );
        };
    }, []);

    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <ul className="profile-list">
                {filteredUsers.map((user) => (
                    <li key={user.id}>
                        <UserProfile
                            name={user.name}
                            age={user.age}
                            location={user.location}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);