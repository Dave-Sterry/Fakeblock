import React from "react";
import Home from "./home";
import Messages from "./messages";
import Notifications from "./notifications";

function Header(){
  return(
    <React.Fragment>
        <h1>Fakeblock</h1>
        <Home />
        <Messages />
        <Notifications />
      </React.Fragment>
    );
}

export default Header;