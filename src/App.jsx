import React from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="flex flex-col h-full justify-center w-full p-2 md:p-0">
      <Sidebar />
      <Header />
      <Banner />
      <Aboutme />
      <Slider />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
