import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherButton from './component/WeatherButton';
import WeatherBox from './component/WeatherBox';
import { ClipLoader } from 'react-spinners';

function App() {
  const [weather, setWeather]=useState(null);
  const [city, setCity]=useState('');
  const [loading, setLoading]=useState(false);
  const [apiError, setAPIError]=useState('');
  const cities=['SEOUL', 'NEW YORK', 'TOKYO', 'NAGOYA', 'FUKUOKA', 'OSAKA'];

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat=position.coords.latitude;
      let lon=position.coords.longitude;
      console.log("현재위치", lat, lon);

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation=async(lat, lon)=>{
    try {
      //TO DO
      let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cd40628aa3d6fc8beb360df5bb338838&units=metric`
      setLoading(true);
      let response=await fetch(url)
      let data=await response.json();
  
      setWeather(data);
      setLoading(false);
    } catch(err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  const getWeatherByCity=async()=>{
    try {
      //TO DO
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd40628aa3d6fc8beb360df5bb338838&units=metric`
      setLoading(true);
      let response=await fetch(url)
      let data=await response.json();
      console.log("selected city data", data);
      setWeather(data);
      setLoading(false);
    } catch(err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  const handleCityChange=(city)=>{
    console.log("handleCityChange-->", city);
    if(city === "current") {
      setCity('');
    } else {
      setCity(city);
    }
  };

  useEffect(()=>{
    if(city==="") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  },[city]);

  return (
    <div>
      {loading ? (
        <div className='container'>
          <ClipLoader color="#FFFF00" loading={loading} size={150}/>
        </div>
    ) : ( 
    <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} handleCityChange={handleCityChange} selectedCity={city}/>
    </div>
    )}
    </div>
  );
}

export default App;
