import React from 'react';
import './Screen.css';
import template from "./Screen.jsx";


const Screen = ({config, state, timer, blueTeam, redTeam}) => {
 return(template({config, state, timer, blueTeam, redTeam}))
}

export default Screen;
