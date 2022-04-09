import Topbar from '../Topbar'
import RedTeam from '../RedTeam'
import BlueTeam from '../BlueTeam'
import Banbar from '../Banbar'

const template = () => ( 
  <div className="Screen">
    <Topbar />
    <div className='MidBar'>
      <BlueTeam />
      <div className='Timer'>
        :30
      </div>
      <RedTeam/>
    </div>
    <Banbar />
  </div>
)

export default template;
