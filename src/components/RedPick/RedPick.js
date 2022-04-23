import React from 'react';
import './RedPick.css';
import template from './RedPick.jsx'

const RedPick = ({active, champion, playerName}) => { 
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

export default RedPick;
