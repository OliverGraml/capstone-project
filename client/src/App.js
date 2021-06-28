import React from 'react';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';
import ListView from './pages/ListView';
import CreateSpotForm from './pages/CreateSpotForm';
import CreateLocationForm from './pages/CreateLocationForm';

import Header from './components/Header';

function App() {
  const [serverMessage, setServerMessage] = useState('');
  const [personalSpots, setPersonalSpots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/spot')
      .then((res) => res.json())
      .then((apiSpots) => setPersonalSpots(apiSpots))
      .catch((error) => console.error(error));
  }, []);

  function addSpot(spot) {
    fetch('http://localhost:4000/spot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(spot),
    })
      .then((result) => result.json())
      .then((spotSaved) => setPersonalSpots([...personalSpots, spotSaved]))
      .catch((error) => console.error(error));
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/MapPage">
          <MapPage />
        </Route>

        <Route path="/ListView">
          <ListView />
        </Route>

        <Route path="/CreateSpotForm">
          <CreateSpotForm onAddSpot={addSpot} />
        </Route>

        <Route path="/CreateLocationForm">
          <CreateLocationForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
