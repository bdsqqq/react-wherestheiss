import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';

function IssMap(props){
    const position = [props.lat, props.lon]
    const iconOptions = L.icon({
      iconUrl: require("./favicon.ico"),
      iconRetinaUrl: require("./favicon.ico"),
      iconAnchor: new L.point(30, 45),
      popupAnchor: new L.point(0, -45),
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(60, 60),
    });

    return(
        <Map center={position} zoom={3} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker 
          icon={iconOptions} 
          position={position}>
          <Popup>
            <center>A iss está aqui.<br/> A ciência é incrivel!</center> 
          </Popup>
        </Marker>
      </Map>
    );
}

export default IssMap

