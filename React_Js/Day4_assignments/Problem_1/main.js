const GreetingCard=({ greeting, name })=> {
    return (
      <div className="card">
        <h2>{greeting}</h2>
        <p>{name}</p>
      </div>
    );
  }

  // App component
  const App=()=> {
    const cards = [
      { greeting: "Happy Birthday", name: "Virendra" },
      { greeting: "Congratulations", name: "Gorang" },
      { greeting: "Happy Anniversary", name: "Radhika" },
      { greeting: "Best Wishes", name: "Ajay" }
    ];

    return (
      <div>
        {cards.map((card, index) => (
          <GreetingCard key={index} greeting={card.greeting} name={card.name} />
        ))}
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);