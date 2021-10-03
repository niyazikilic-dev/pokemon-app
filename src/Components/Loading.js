import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottie/loading.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="loading-main">
      <div>
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </div>
  );
};

export default Loading;
