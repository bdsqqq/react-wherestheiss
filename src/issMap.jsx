import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

function IssMap(props){
    const position = [props.lat, props.lon]

    return(
        <Map center={position} zoom={2}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            Essa é a ISS <br/> A ciência é incrivel!
          </Popup>
        </Marker>
      </Map>
    );
}

export default IssMap