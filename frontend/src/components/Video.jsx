import React from "react";

function Video({ src }) {
  return (
    <video
      src={src}
      autoPlay
      loop
      controls
      style={{ width: "100%", height: "100%" }}
    ></video>
  );
}

export default Video;
