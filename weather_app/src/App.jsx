import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9ab4167dc0ed4182f1d0cb4ccdd36719`
      );

      if (!response.ok) {
        throw new Error('City not found. Please enter a valid city.');
      }

      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    if (location.trim()) {
      fetchWeather();
    }
  };

  return (
      <div className=" p-5 d-flex flex-direction-column justify-content-center align-items-center m-5">
        <div className="m-4 text-center position-absolute top-0 start-50 translate-middle-x"  style={{ top: 0 }}>
          <input
            type="text"
            className="form-control d-inline-block w-75"
            placeholder="Enter city"
            value={location}
            onChange={handleInputChange}
          />
          <button className="btn btn-secondary m-2" onClick={handleSearch}>
            Search
          </button>
          {error && <p className="text-danger text-center">{error}</p>}
        </div>
      
        {weatherData && (
          <div className="text-center text-bold m-5 p-5 position-absolute top-0 start-0 display-6 font-weight-bold bg bg-grey text-white text-lg">
            <h1>{weatherData.name}</h1>
            <h2>{weatherData.main.temp}°C</h2>
          </div>
        )}
        {weatherData && (
         <div className="display-6 font-weight-bold m-5 p-2 bg bg-grey text-lg position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-between align-items-center gap-3 w-75 text-white">
         <p >Feels Like <br />{weatherData.main.feels_like}°C</p>
         <p>Humidity <br />{weatherData.main.humidity}%</p>
         <p>Wind Speed <br />{weatherData.wind.speed} m/s</p>
       </div>
      
        )}
      </div>
  );
};

export default WeatherApp;
