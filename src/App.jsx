import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import RightSide from "./components/RightSide/RightSide";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
