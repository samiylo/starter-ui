import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {
  const [message, setMessage] = useState('');
  const [weather, setWeather] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=29.7604&longitude=-95.3698&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const { temperature_2m, wind_speed_10m } = data.current;
      setWeather(`Temperature: ${temperature_2m}°C, Wind Speed: ${wind_speed_10m} km/h`);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };
  

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
        <button  className="btn btn-primary" role="button" aria-pressed="true" onClick={fetchMessage}>Ask Nesha</button>
        {message && <p>{message}</p>}
        <button className="btn btn-success" onClick={fetchWeather}>Get Houston Weather</button>
{weather && <p>{weather}</p>}

      </header>
    </div>
  );
}

export default App;
