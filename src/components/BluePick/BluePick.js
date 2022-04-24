import React from 'react';
import './BluePick.css';
import template from './BluePick.jsx'

const BluePick = ({active, champion, playerName, index}) => { 
  const position_pictos = [
    '/positions/top_splash_placeholder.svg',
    '/positions/jung_splash_placeholder.svg',
    '/positions/mid_splash_placeholder.svg',
    '/positions/bot_splash_placeholder.svg',
    '/positions/sup_splash_placeholder.svg'
  ]

  const champ = champion.name 
  const nick = playerName
  const activeClass = active ? 'active' : ''
  const uri = champion.splashImg ? `http://localhost:8999${champion.splashImg}` : position_pictos[index]

  return(template({
    activeClass,
    nick,
    champ,
    uri
  }))
};

export default BluePick;
