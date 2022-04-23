import Topbar from '../Topbar'
import RedTeam from '../RedTeam'
import BlueTeam from '../BlueTeam'
import Banbar from '../Banbar'

const template = ({config, state, timer, blueTeam, redTeam}) => {
  return( 
    <div className="Screen">
      <Topbar infos={config}/>
      <div className='MidBar'>
        <BlueTeam />
        <div className='Timer'>
          :{timer} 
        </div>
        <RedTeam />
      </div>
      <Banbar blueBan={blueTeam.bans} redBan={redTeam.bans} state={state} />
    </div>
  )
}
export default template;
