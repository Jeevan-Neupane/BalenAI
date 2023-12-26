import React, { useState } from "react";
import CameraComponent from "../components/CameraAccess";
import UploadVideo from "../components/UploadVideo";
import CameraCard from "../components/CameraCard";
import smoke1 from "../../public/smoke1.mp4";
import smoke2 from "../../public/smoke2.mp4";
import smoke3 from "../../public/smoke3.mp4";
import smoke4 from "../../public/smoke4.mp4";
import Video from "../components/Video";


function CameraPage() {




  const citiesData = [
    {
      name: "Satdobato",
      to: "/video/satdobato",
    },
    {
      name: "Koteshwor",
      to: "/video/koteshwor",
    },
    {
      name: "Pulchowk",
      to: "/video/pulchowk",
    },
    {
      name: "Thimi",
      to: "/video/thimi",
    },
  ];

  const videoSrc = [
    {
      id: 1,
      src: smoke1,
    },
    {
      id: 2,
      src: smoke2,
    },
    {
      id: 3,
      src: smoke3,
    },
    {
      id: 4,
      src: smoke4,
    },
  ];
  return (
    <div>
      <div className='flex justify-center'>
        {citiesData.map((city, index) => (
          <CameraCard
            key={index}
            name={city.name}
            to={city.to}
          />
        ))}
      </div>
      <div className='flex gap-4 mt-5'>
        {videoSrc.map((video, index) => {
          return (
            <div
              key={video.id}
              className='w-full '
            >
              <div
                className=' flex-col h-20 w-20   '
                style={{
                  display: "flex",
                  width: "200px",
                  height: "200px",
                  alignItems: "stretch",
                }}
              >
                <Video
                  src={video.src}
              
                />
                <h2 className='text-white text-center mt-3'>
                  Camera No:{index + 1}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CameraPage;
