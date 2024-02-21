import React from "react";
import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";

const Artists = () => {
  return (
    <div
      className="bg-white flex justify-center item-center
     h-[100vh]"
    >
      <div className="w-[50vh] h-[60vh] bg-blue-500 b-black my-auto flex justify-center ">
        <img src={image} alt="" />
        <h1>artist</h1>
        <h2>dicription </h2>
      </div>
    </div>
  );
};

export default Artists;
