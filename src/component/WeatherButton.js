import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
      <Button variant="warning">현재위치</Button>
      <Button variant="warning">서울</Button>
      <Button variant="warning">동경</Button>
      <Button variant="warning">뉴욕</Button>
      </div>
  )
}

export default WeatherButton
