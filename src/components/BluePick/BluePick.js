import React from 'react';
import './BluePick.css';
import template from './BluePick.jsx'

const BluePick = ({active}) => { 
  const champ = 'Jarvan IV'
  const nick = 'PeterPunk'
  const activeClass = active ? 'active' : ''

  return(template({activeClass, nick, champ}))
};

export default BluePick;
