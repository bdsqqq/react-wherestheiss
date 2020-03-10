import React from 'react';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){

    return(
        <div className='footerWrapper'>
            <p>Feito com <FontAwesomeIcon role="img" aria-label="amor" icon={faHeart}/> por <a href="https://github.com/bdsqqq">igor bedesqui</a>, atribuições podem ser encontradas <a href="https://github.com/bdsqqq/react-wherestheiss">no repositorio </a></p>
        </div>
    );
}

export default Footer