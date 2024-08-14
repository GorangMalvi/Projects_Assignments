import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import './styles/App.css';  // If you have a global CSS file

function App() {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
    </div>
  );
}

export default App;
