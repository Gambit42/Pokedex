import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingComponent = () => {
  return (
    <div className="h-20 mt-5 flex flex-col justify-center items-center bg-stone-50">
      <ClipLoader color={"#4F9FF6"} loading={true} size={50} />
    </div>
  );
};

export default LoadingComponent;
