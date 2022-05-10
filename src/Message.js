import React from "react";
import "./Message.css";
import { Avatar } from "@mui/material";

function Message() {
  return (
    <div className="message">
      <Avatar src="https://randomuser.me/api/portraits/men/50.jpg"/>
      <div className="message__info">
        <h4>
          adam1862
          <span className="message__timestamp">this is a timestamp</span>
        </h4>

        <p>This is a test message</p>
      </div>
    </div>
  );
}

export default Message;
