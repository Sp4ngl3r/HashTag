import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  const [urlVar, setUrlVar] = useState("");

  useEffect(() => {
    setUrlVar(Math.floor(Math.random() * 20000));
  }, []);

  const createChat = () => {
    const channelName = prompt("Provide Channel Name");

    if (channelName) {
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${urlVar}.svg`} />
      <div className="sidebarChat__info">
        <h2>Channel name</h2>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Want New Channel ?</h2>
    </div>
  );
}

export default SidebarChat;
