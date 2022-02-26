import Topbar from '../Topbar'
import RedTeam from '../RedTeam'
import BlueTeam from '../BlueTeam'

const template = () => ( 
  <div className="Screen">
    <Topbar />
    <div className='MidBar'>
      <BlueTeam />
      <RedTeam/>
    </div>
    <div className="BanBar">
      BanBar
    </div>
  </div>
)

export default template;
