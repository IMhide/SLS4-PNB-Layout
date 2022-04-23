import './Banbar.css';
import template from './Banbar.jsx'

const Banbar = ({blueBan, redBan, state}) => {
  return(template({blueBan, redBan, state}))
};

export default Banbar;
