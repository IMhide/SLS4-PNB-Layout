import React, {useState, useEffect} from 'react';
import './Topbar.css';
import template from './Topbar.jsx'

const Topbar = ({infos}) => {
  const blueTeamName = infos.blueTeam.name;
  const redTeamName = infos.redTeam.name;
  const [blueLogo, setBlueLogo] = useState(null) 
  const [redLogo, setRedLogo] = useState(null) 
  useEffect( () => {
    import(`../../logos/${blueTeamName.toUpperCase()}Logo.png`).then((logo) => setBlueLogo(logo.default))
    import(`../../logos/${redTeamName.toUpperCase()}Logo.png`).then((logo) => setRedLogo(logo.default))
  }, [])

  return(template({
    blueTeamName,
    redTeamName,
    blueLogo,
    redLogo,
    blueScore: infos.blueTeam.score,
    redScore: infos.redTeam.score
  }))
};

export default Topbar;
