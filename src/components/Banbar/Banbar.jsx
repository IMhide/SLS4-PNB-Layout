const template = ({blueBan, redBan, state}) => ( 
  <div className="Banbar"> 
    <div className='BannedHero'>
      <div className='BlueBanned'>
        {blueBan.map((champ) => (
          champ.champion.squareImg &&
            <div className="Ban">
              <img src={`http://localhost:8999${champ.champion.squareImg}`}/>
            </div>
        ))}
      </div>
      <div className='State'>
        {state}
      </div>
      <div className='RedBanned'>
        {redBan.map((champ) => (
          champ.champion.squareImg &&
            <div className="Ban">
              <img src={`http://localhost:8999${champ.champion.squareImg}`}/>
            </div>
        ))}
      </div>
    </div>
    <div className="BanMessages">
      <div>
        Blue bans
      </div>
      <div>
        Red bans
      </div>
    </div>
  </div>
)

export default template;
