import React, {useState, useEffect} from 'react';
import './Topbar.css';
import template from './Topbar.jsx'

const Topbar = ({infos}) => {
  const blueTeamName = infos.blueTeam.name;
  const redTeamName = infos.redTeam.name;
  const [blueLogo, setBlueLogo] = useState(null) 
  const [redLogo, setRedLogo] = useState(null) 

  return(template({
    blueTeamName,
    redTeamName,
    blueLogo: `/logos/${blueTeamName.toUpperCase()}Logo.png`,
    redLogo: `/logos/${redTeamName.toUpperCase()}Logo.png`,
    blueScore: infos.blueTeam.score,
    redScore: infos.redTeam.score
  }))
};

export default Topbar;
