import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, selectedCity, handleCityChange}) => {
  return (
    <div>
      <Button 
        variant={`${selectedCity == '' ? "primary" : "warning"}`}
        onClick={()=>handleCityChange("current")}>
        현재위치
      </Button>

      {cities.map((city)=>(
        <Button 
          variant={`${selectedCity === city ? "primary" : "warning"}`}
          onClick={()=>handleCityChange(city)}>
            {city}
        </Button>
      ))}
    </div>
  );
}

export default WeatherButton
