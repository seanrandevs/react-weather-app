import { useState, useEffect } from "react"

const Weather = () => {
   const [data, setData] = useState({});
   const [location, setLocation] = useState('');

   // Getting time
   const currDate = new Date().toLocaleDateString();
   const currTime = new Date().toLocaleTimeString(
    'en-US', {hour: '2-digit', minute: '2-digit'});


 


  return (
    <div className="container">
        <div className="data">
        <input
        placeholder="Enter Location"
        className="InputData"
        type="search"
        />
        <div className="date">{currDate}</div>
        <div className="time">{currTime}</div>
        <div className="location">Lafayette</div>
        <div className="condition">Sunny</div>
        <div className="temp">60</div>
        </div>
        <div className="bottom-data">
          <div className="feels">
            <p className="bold">65F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
    </div>
  )
}

export default Weather