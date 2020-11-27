import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../../firebase";
import "./SidebarChat.css";

function SidebarChat({ id, name, addNewChat }) {
  const [urlVar, setUrlVar] = useState("");

  useEffect(() => {
    setUrlVar(Math.floor(Math.random() * 20000));
  }, []);

  const createChat = () => {
    const channelName = prompt("Provide Channel Name");

    if (channelName) {
      db.collection("channels").add({
        name: channelName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/channels/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${urlVar}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last Message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Want New Channel ?</h2>
    </div>
  );
}

export default SidebarChat;
