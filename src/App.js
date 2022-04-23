import Screen from './components/Screen'
import { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState('');
  const [globalState, setGlobalState] = useState({
    state : 'NOSTATE',
    timer: 0,
    blueTeam: {
      picks: [],
      bans:[]
    },
    redTeam: {
      picks: [],
      bans:[]
    }
  });
  const [config, setConfig] = useState({
    frontend: {
      blueTeam: {
        name: "Team Blue",
        score: 0,
      },
      redTeam: {
        name: "Team Red",
        score: 0,
      }
    }
  });

  useEffect(() => {
    Window.PB.on('newState', state => {
      console.log(state.state)
      setGlobalState(state.state);
      setConfig(state.state.config);
    });

    Window.PB.on('heartbeat', hb => {
      setConfig(hb.config);
    });

    try {
      Window.PB.start();
    } catch {
      setError('error: failed to read backend url query param. make sure you set ?backend=ws://[ip]:[port] as query parameter.')
    }
  }, []);


  if (Window.PB.getQueryVariable('status') === '2') {

    const status = {
      backend: Window.PB.getQueryVariable('backend'),
      error: error,
      config: config,
      state: { ...globalState, config: undefined, blueTeam: JSON.stringify(globalState.blueTeam), redTeam: JSON.stringify(globalState.redTeam) }
    }
    return (
      <>
        <h1>Backend Error</h1> 
        <p>{JSON.stringify(status, undefined, 4)}</p>
      </>
    )
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    )
  }

  return (<Screen config={config.frontend} state={globalState.state} timer={globalState.timer} blueTeam={globalState.blueTeam} redTeam={globalState.redTeam}/>);
}

export default App;
