import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import People from './components/People';
import Planets from './components/Planets';
import Home from './components/Home';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
  })

  return (
    <>
     <Router>
      <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>loading</Loader>
            </Dimmer>
          ) : (
            <Routes>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/people'>
              <People/>
            </Route>
            <Route exact path='/planets'>
              <Planets/>
            </Route>
          </Routes>
          )}
        </Container>
     </Router>
    </>
  );
}

export default App;
