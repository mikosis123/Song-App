import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Songs from "./Components/Songs";
import Artists from "./Components/Artists";
import Geners from "./Components/Geners";
import Albums from "./Components/Albums";

function App() {
  return (
    <div className="flex justify-start w-full bg-white">
      <div className="min-h-screen relative  flex justify-between align-center ">
        <Sidebar />
      </div>
      <div className="w-full h-screen overflow-y-scroll">
        <Routes>
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Songs" element={<Songs />} />
          <Route path="/Albums" element={<Albums />} />
          <Route path="/Geners" element={<Geners />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
