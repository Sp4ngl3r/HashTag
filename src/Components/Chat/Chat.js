// eslint-disable-next-line
import { Avatar, IconButton } from "@material-ui/core";
import {
  // eslint-disable-next-line
  AttachFile,
  // eslint-disable-next-line
  InsertEmoticon,
  // eslint-disable-next-line
  Mic,
  // eslint-disable-next-line
  MoreVert,
  // eslint-disable-next-line
  Search,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
// import ScrollToBottom from "react-scroll-to-bottom";
// import ReactEmoji from "react-emoji";
// import ScrollableFeed from "react-scrollable-feed";
import { emojify } from "react-emojione";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

import "./Chat.css";

function Chat() {
  const [urlVar, setUrlVar] = useState("");
  const [input, setInput] = useState("");
  const { channelId } = useParams();
  const [channelName, setChannelName] = useState("");
  const [messages, setMessages] = useState([]);
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .onSnapshot((snapshot) => setChannelName(snapshot.data().name));

      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("time", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);

  useEffect(() => {
    setUrlVar(Math.floor(Math.random() * 20000));
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Message:", input);

    if (input !== "") {
      db.collection("channels").doc(channelId).collection("messages").add({
        message: input,
        name: user.displayName,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${urlVar}.svg`} />

        <div className="chat__headerInfo">
          <h3>{channelName}</h3>
          <p>
            last message at{" "}
            {new Date(
              messages[messages.length - 1]?.time?.toDate()
            ).toUTCString()}
          </p>
        </div>

        <div className="chat__headerRight">
          {/* <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton> */}
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat__reciever"
            }`}
          >
            <span className="chat__name">{message.name}</span>
            {emojify(message.message)}
            <span className="chat__timestamp">
              {new Date(message.time?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        {/* <InsertEmoticon />
        <Mic /> */}
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
