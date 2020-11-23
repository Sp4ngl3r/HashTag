import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Chat.css";

function Chat() {
  const [urlVar, setUrlVar] = useState("");

  useEffect(() => {
    setUrlVar(Math.floor(Math.random() * 20000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${urlVar}.svg`} />

        <div className="chat__headerInfo">
          <h3>Channel Name</h3>
          <p>Recent activity at ....</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">XYZ</span>
          Holla Amigos
        </p>
        <p className="chat__message">This is Second Chat</p>
        <p className="chat__message">X)</p>
      </div>

      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
