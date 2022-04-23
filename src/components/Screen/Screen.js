import React from 'react';
import './Screen.css';
import template from "./Screen.jsx";


const Screen = ({config}) => {
  console.log(config)
 return(template(config))
}

export default Screen;
