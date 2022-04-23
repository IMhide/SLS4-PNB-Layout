const template = ({blueTeamName, redTeamName, blueLogo, redLogo, blueScore, redScore}) => ( 
  <div className="Topbar"> 
    <div className="BlueTeamDisplay">
      <div className="BlueTeamLogo">
        {blueLogo &&
        <img src={blueLogo} /> 
        }
      </div>
      <div className="BlueTeamName">
        {blueTeamName}
      </div>
    </div>
    <div className="Score">
      <div className="blueScore">
        {blueScore}
      </div>
      <img src='SLSLogo.png' />
      <div className="redScore">
        {redScore}
      </div>
    </div>
    <div className="RedTeamDisplay">
      <div className="RedTeamName">
        {redTeamName}
      </div>
      <div className="RedTeamLogo">
        {redLogo &&
        <img src={redLogo} /> 
        }
      </div>
    </div>
  </div>
)

export default template;
