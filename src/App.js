import React, { useState } from 'react';
import useInterval from './useInterval'
import Body from './body'
import Footer from './footer'
import IssMap from './issMap'
import './App.css';

function App() {
  const nada = () => {}
  const [data, setData] = useState(null);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [delay, setDelay] = useState(0);

  async function fetchData() {
    const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

    const response = await fetch(api_url);
    const jsonData = await response.json();
    
    setData(jsonData);
    setLat(jsonData.latitude);
    setLon(jsonData.longitude);

    ((delay == 0) ? setDelay(3000) : nada() )
    console.log(data, "inner");
  };
  console.log(data, "outter")

  useInterval(() => {
    //fetchData();
  }, delay);

  return (
    <>
    <div>
      <h1>Where's the ISS at??</h1>
    </div>
    <Body data={data}/>
    <IssMap lat={lat} lon={lon}/>
    <Footer/>
    </>
  );
}

export default App;
