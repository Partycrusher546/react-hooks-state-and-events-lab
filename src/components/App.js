
import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {/* Your other components go here */}
    </div>
  );
}

export default App;
