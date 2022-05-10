import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';
import SidebarChanel from "./SidebarChanel";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>adam1862</h3>
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

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>  
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon/>
          <CallIcon/>  
        </div>
      </div>

        <div className="sidebar__profile">
            <Avatar src="https://randomuser.me/api/portraits/men/50.jpg"/>
            <div className="sidebar__profileInfo">
                <h3>Adam A</h3>
                <p>#thisIsMyID</p>
            </div>

            <div className="sidebar__profileIcons">
              <MicIcon/>
              <HeadsetIcon/>
              <SettingsIcon/>
            </div>

        </div>
    </div>
  );
}

export default Sidebar;
