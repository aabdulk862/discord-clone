import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChanel from "./SidebarChanel";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Aabdulk862</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsList">
          <SidebarChanel />
          <SidebarChanel />
          <SidebarChanel />
          <SidebarChanel />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
