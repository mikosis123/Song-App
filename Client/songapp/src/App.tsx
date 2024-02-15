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
    <div className="flex justify-start w-full bg-gradient-to-r from-gray-300 to-gray-200">
      <div className="min-h-screen relative mr-[40px] flex justify-between align-center ">
        <Sidebar />
      </div>
      <div className="w-[72%] h-[90%] mt-8 ">
        <Routes>
          <Route path="/" element={<Songs />}>
            <Route path="/Artists" element={<Artists />} />
            <Route path="/Albums" element={<Albums />} />
            <Route path="/Geners" element={<Geners />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
