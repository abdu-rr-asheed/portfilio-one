import React from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

// import ScrollToButton from "./components/ScrollToButton";
const sectionId = ["hero", "about", "portfolio", "skills", "contact"];

function App() {
  const descriptionRef = React.useRef(null);
  return (
    <div className="flex">
      <div className="card-Slider">
        <Header />
        <Banner />
        <Aboutme id={sectionId[1]} />
        <Slider />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
