const template = ({activeClass, champ, nick, uri}) => ( 
  <div className={`BluePick ${activeClass}`} style={{
      backgroundImage: `url(${uri})`
    }}>
    <div className="Champ">{champ}</div>
    <div className="Nick"> {nick}</div>
  </div>
)
export default template;
