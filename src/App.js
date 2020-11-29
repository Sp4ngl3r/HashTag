import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { useState } from "react";
import Login from "./Components/Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  return (
    //This is BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />

            <Switch>
              <Route path="/channels/:channelId">
                <Chat />
              </Route>
              <Route path="/">{/* <Chat /> */}</Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
