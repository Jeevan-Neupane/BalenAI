import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import smoke1 from "../../public/smoke1.mp4";
import smoke2 from "../../public/smoke2.mp4";
import smoke3 from "../../public/smoke3.mp4";
import smoke4 from "../../public/smoke4.mp4";
import html2canvas from "html2canvas";
import music from "../../public/audio.mp3";

import Swal from "sweetalert2";
function SingleVideoPage({ screenshotHistory, setScreenshotHistory }) {
  const { name } = useParams();

  const takeScreenshot = () => {
    const element = document.getElementById("targetElement");

    html2canvas(element).then((canvas) => {
      const image = canvas.toDataURL("image/png");

      // Save screenshot information to history
      const screenshotInfo = {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        location: name,
        image: image,
      };

      setScreenshotHistory((prevHistory) => [screenshotInfo, ...prevHistory]);
    });
  };
  const showAlert = () => {
    Swal.fire({
      title: "Smoking Detected",
      text: "Someone is smoking in given area",
      icon: "warning",
    });
  };
  const playNotificationSound = () => {
    const audio = new Audio(music);
    audio.play();
  };
  useEffect(() => {
    // Take screenshot every 10 seconds
    const intervalId = setInterval(() => {
      takeScreenshot();
      playNotificationSound();
      showAlert();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  let src;

  if (name === "satdobato") {
    src = smoke1;
  } else if (name === "koteshwor") {
    src = smoke2;
  } else if (name === "pulchowk") {
    src = smoke3;
  } else {
    src = smoke4;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "800px",
      }}
    >
      <video
        src={src}
        autoPlay
        loop
        id='targetElement'
        controls
        style={{ width: "800px", height: "800px" }}
      ></video>

      {/* Display screenshot history using ScreenshotItem component */}
    </div>
  );
}

export default SingleVideoPage;
