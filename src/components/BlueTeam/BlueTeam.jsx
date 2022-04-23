import BluePick from '../BluePick'

const template = ({team}) => ( 
  <div className="BlueTeam">
    {team.map((player, index) => (
    <BluePick active={player.isActive} champion={player.champion} playerName={player.displayName}/>
    ))}
  </div>
)

export default template;
