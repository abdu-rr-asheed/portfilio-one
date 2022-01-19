import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="card-Slider">
        <Header />
        <Banner />
        {/* <Slider /> */}

        {/* <iframe
          src="https://my.spline.design/charactor-389faed3c836ddc49c274b15d22eba47/"
          frameborder="0"
          // width="600"
          // height="600"
          className="md:w-[300px] w-screen h-[500px]"></iframe> */}
      </div>
    </div>
  );
}

export default App;
