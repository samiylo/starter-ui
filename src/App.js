import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await fetch('http://localhost:8080/ask/nesha');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Good morning Nesha</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <button  className="btn btn-primary" onClick={fetchMessage}>Ask Nesha</button>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
