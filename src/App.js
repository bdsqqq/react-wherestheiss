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
    ((delay === 0) ? setDelay(3000) : nada() )
    const api_url = 'https://bdsq-rest-api.herokuapp.com/iss/getdata'

    const response = await fetch(api_url);
    const jsonData = await response.json();
    
    setData(jsonData);
    setLat(jsonData.latitude);
    setLon(jsonData.longitude);
  };

  useInterval(() => {
    fetchData();
  }, delay);

  return (
    <>
    <div className="wrapper">
      <div className="header">
        <h1>Onde está a iss??</h1>
      </div>
      <Body data={data}/>
      <IssMap lat={lat} lon={lon}/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
