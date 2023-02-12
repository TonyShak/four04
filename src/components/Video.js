import React from "react";
import vidz from "../assets/four04.mp4"
const Video = () => {
    return (
      <video controls width="100%" autoPlay muted loop>
        <source src={vidz} type="video/mp4"/>
      </video>
    );
  };
  
  export default Video;