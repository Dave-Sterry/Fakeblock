import React from "react";
import robPicture from "./../img/rob_robertson.jpeg";
// import PropTypes from "prop-types";

function Profile(){
  return(
    <>
    <h1>Rob Robertson The 4th</h1>
    <img src={robPicture} alt ='Profile picture'/>
    </>
  );
}

export default Profile;