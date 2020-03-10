import React from 'react';

function Body(props) {
    const data = props.data;

    if (data === null) {
      return(
        <p><span role="img" aria-label="Emoji do globo terrestre">🌎</span>  carregando...</p>
      );
    } else{
        return(
          <p><span role="img" aria-label="Emoji do globo terrestre">🌎</span> Latitude: {data.latitude} <span role="img" aria-label="Emoji do globo terrestre">🌏</span> longitude: {data.longitude}</p>
        );
      }
    
}

export default Body;
