import { useState } from "react";
import axios from "axios";

const Weather = () => {
  // Setting data from the api
   const [data, setData] = useState({});
   // Setting location
   const [location, setLocation] = useState('');

   // Getting time
   const currDate = new Date().toLocaleDateString();
   const currTime = new Date().toLocaleTimeString(
    'en-US', {hour: '2-digit', minute: '2-digit'});
    // Weather API
   const api = `https://api.openweathermap.org/data/2.5/weather?q=
    ${location}&units=imperial&appid=c412fb8f1ed42194a962dd8b85f34c0c`;

    const searchLocation = (event) => {
      if(event.key === 'Enter') {
       axios.get(api).then((response) => {
         setData(response.data);
        })
       setLocation('');
      }
    }
    console.log(data);

  return (
    <div className="container">
        <div className="data">
        <input
        placeholder="Enter Location"
        className="InputData"
        type="text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation} />
        <div className="date">{currDate}</div>
        <div className="time">{currTime}</div>
        <div className="location" data-testid="location" >{data.name}</div>
        {data.main ? <div className="temp">
        {data.main.temp}°F</div> : null}
        {data.weather ? <div className="condition">
        {data.weather[0].description}</div> : null}
        </div>
        <div className="bottom-data">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}°</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
    </div>
  )
}

export default Weather