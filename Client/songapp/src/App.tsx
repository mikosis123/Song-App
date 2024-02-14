import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="flex justify-start w-full bg-gradient-to-r from-gray-300 to-gray-200">
      <div className="min-h-screen relative mr-[40px] flex justify-between align-center ">
        <Sidebar />
      </div>
      <div className="w-[72%] h-[90%] mt-8 "></div>
    </div>
  );
}

export default App;
