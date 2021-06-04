import {useEffect, useState} from 'react';

function App() {
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((res) => setServerMessage(res));
  });

  return <div className="App">{serverMessage}</div>;
}

export default App;
