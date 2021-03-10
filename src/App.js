import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import League from './components/League/League';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import Nomatch from './components/Nomatch/Nomatch';

function App() {
  return (
    <>
    <Router>    
      <Switch>
      <Route exact path ="/">
        <League/>
      </Route>
      <Route  path ="/league">
        <League/>
      </Route>
      <Route path ="/details/:idLeague">
        <LeagueDetails/>
      </Route>
      <Route path ="*">
        <Nomatch/>
      </Route>
      </Switch>
      
    </Router>
     
  
    </>
  );
}

export default App;
