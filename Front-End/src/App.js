import './App.css';
import React from "react";
import TeamsTable from "components/TeamsTable";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TeamInfo from "components/TeamInfo";
import useTeams from "hooks/useTeams";
import Header from "components/Header";
import AddTeam from "components/AddTeam";
import TeamEdit from "components/TeamEdit";

function App() {
  const {teams} = useTeams(); 

  return (
    <React.Fragment>
      <Router>

        <Header/>

        <Switch>

          <Route path="/" exact>
            <div className="container-table-teams">
              <TeamsTable teams={teams}/>
            </div>
          </Route>

          <Route path="/equipo/:nombreEquipo" exact>
            <TeamInfo teams={teams}/>
          </Route>

          <Route path="/editar/:nombreEquipo" exact>
            <TeamEdit teams={teams}/>
          </Route>

          <Route path="/agregar" exact>
            <AddTeam/>
          </Route>

        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
