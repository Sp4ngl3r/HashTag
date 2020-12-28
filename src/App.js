import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/Login";
import { useStateValue } from "./StateProvider";
// import { useEffect, useState } from "react";
// import Pusher from "pusher-js";
// import axios from "./axios";

function App() {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  // const [messages, setMessaages] = useState([]);

  // useEffect(() => {
  //   const pusher = new Pusher("fa0bfe9bf7555a42ace2", {
  //     cluster: "ap2",
  //   });

  //   const channel = pusher.subscribe("messages");
  //   channel.bind("inserted", (newMessage) => {
  //     // alert(JSON.stringify(newMessage));
  //     setMessaages([...messages, newMessage]);
  //   });

  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // }, [messages]);

  // useEffect(() => {
  //   axios.get("/messages/sync").then((response) => {
  //     setMessaages(response.data);
  //   });
  // }, []);

  // console.log(messages);

  return (
    //This is BEM naming convention
    <div className="app">
      {!user ? (
        <div>
          <Login />
        </div>
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
