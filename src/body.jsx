import React from 'react';

function Body(props) {
    const data = props.data;

    if (data === null) {
        return(
            <p>Loading...</p>
        );
      }else{
        return(
            <p>{data.latitude}</p>
        );
      }
    
}

export default Body;
