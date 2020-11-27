import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  Search,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import "./Chat.css";

function Chat() {
  const [urlVar, setUrlVar] = useState("");
  const [input, setInput] = useState("");
  const { channelId } = useParams();
  const [channelName, setChannelName] = useState("");

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .onSnapshot((snapshot) => setChannelName(snapshot.data().name));
    }
  }, [channelId]);

  useEffect(() => {
    setUrlVar(Math.floor(Math.random() * 20000));
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Message:", input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${urlVar}.svg`} />

        <div className="chat__headerInfo">
          <h3>{channelName}</h3>
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
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">XYZ</span>
          Holla Amigos
          <span className="chat__timestamp">3:52pm</span>
        </p>
        <p className="chat__message chat__reciever">This is Second Chat</p>
        <p className="chat__message">X)</p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <Mic />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
