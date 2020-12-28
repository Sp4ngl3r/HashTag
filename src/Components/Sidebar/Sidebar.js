import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import { Avatar, IconButton } from "@material-ui/core";
// eslint-disable-next-line
import { DonutLarge, MoreVert, Search, SmsRounded } from "@material-ui/icons";

import db from "../../firebase";
import "./Sidebar.css";
import SidebarChat from "../SidebarChat/SidebarChat";
import { useStateValue } from "../../StateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          src={user?.photoURL}
          style={{ height: "100px", width: "100px" }}
        />
        <div className="sidebar__headerRight">
          <h4>HashTagger </h4>
          <h2>{user.displayName}</h2>
          {/* <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <SmsRounded />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton> */}
        </div>
      </div>

      {/* <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <Search />
          <input placeholder="Seeking something?" type="text" />
        </div>
      </div> */}

      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {channels.map((channel) => (
          <SidebarChat
            key={channel.id}
            id={channel.id}
            name={channel.data.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
