import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import MainDashboard from "./components/MainDashboard/MainDashboard";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
        <div></div>
      </div>
    </div>
  );
}

export default App;
