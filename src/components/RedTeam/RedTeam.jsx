import RedPick from '../RedPick'

const template = ({team}) => ( 
  <div className="RedTeam">
    {team.map((player, index) => (
      <RedPick active={player.isActive} champion={player.champion} playerName={player.displayName} index={index} />
    ))}
  </div>
)

export default template;
