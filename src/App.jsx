import React from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="flex">
      <div className="card-Slider">
        <Header />
        <Banner />
        <Aboutme />
        <Slider />
      </div>
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
