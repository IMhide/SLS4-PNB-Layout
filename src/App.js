import Screen from './components/Screen'
import { useState, useEffect } from 'react';

function App() {
  const [globalState, setGlobalState] = useState({});
  const [error, setError] = useState('');
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
      setGlobalState(state.state);
      setConfig(state.state.config);
    });

    Window.PB.on('heartbeat', hb => {
      console.info(`Got new config: ${JSON.stringify(hb.config)}`);
      setConfig(hb.config);
    });

    try {
      Window.PB.start();
    } catch {
      setError('error: failed to read backend url query param. make sure you set ?backend=ws://[ip]:[port] as query parameter.')
    }
  }, []);



  return (<Screen />);
}

export default App;
