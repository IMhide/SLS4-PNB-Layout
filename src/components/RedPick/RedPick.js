import React from 'react';
import './RedPick.css';
import template from './RedPick.jsx'

const RedPick = ({active}) => { 
  const champ = 'Jarvan IV'
  const nick = 'PeterPunk'
  const activeClass = active ? 'active' : ''

  return(template({activeClass, nick, champ}))
};

export default RedPick;
