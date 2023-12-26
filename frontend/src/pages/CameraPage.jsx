import React from "react";
import CameraComponent from "../components/CameraAccess";
import UploadVideo from "../components/UploadVideo";
import CameraCard from "../components/CameraCard";

function CameraPage() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 ">
      <UploadVideo title="Satdobato" />

      <UploadVideo title="Koteshwor" />
      <UploadVideo title="Pulchowk" />
      <UploadVideo title="Thimi" />

    </div>
  );
}

export default CameraPage;
