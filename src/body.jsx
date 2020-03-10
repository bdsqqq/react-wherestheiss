import React from 'react';

function Body(props) {
    const data = props.data;

    if (data === null) {
      return(
        <p><span role="img" aria-label="Emoji do globo terrestre">🌎</span>  carregando...</p>
      );
    } else{
        return(
          <p className="latLonWrapper"><span><span role="img" aria-label="Emoji do globo terrestre">🌎</span> Latitude: {data.latitude}</span> <span><span role="img" aria-label="Emoji do globo terrestre">🌏</span> longitude: {data.longitude}</span></p>
        );
      }
    
}

export default Body;
