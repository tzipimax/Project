import React from 'react';
import picture from './picture/alll.png';
import Musical_Instruments from './picture/Musical_Instruments.jpg';

function Home(){
    return(
        
        <div>
            <img className="imgMusicalInstruments" src = {Musical_Instruments}></img>
        </div>
    );
}

export default Home;