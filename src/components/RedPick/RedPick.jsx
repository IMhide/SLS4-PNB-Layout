const template = ({activeClass, champ, nick}) => ( 
  <div className={`RedPick ${activeClass}`} style={{
      backgroundImage: `url(${"http://localhost:8999/cache/12.4.1/champion/Neeko_splash.jpg"})`
    }}>
    <div className="Champ">{champ}</div>
    <div className="Nick"> {nick}</div>
  </div>
)
export default template;
