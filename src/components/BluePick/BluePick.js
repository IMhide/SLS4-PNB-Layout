import React from 'react';
import './BluePick.css';
import template from './BluePick.jsx'

const BluePick = ({active, champion, playerName}) => { 
  const champ = champion.name 
  const nick = playerName
  const activeClass = active ? 'active' : ''

  return(template({
    activeClass,
    nick,
    champ,
    uri: `http://localhost:8999${champion.splashImg}`
  }))
};

export default BluePick;
