import React from "react";
import NavigationBar from "./components/HomePage/NavigationBar";
import HeroSection from "./components/HomePage/HeroSection";
import Footer from "./components/HomePage/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
// import logoSrc from './publc/logo/bottom-left-logo.svg';

function App() {
  return (
    <div style={{backgroundImage: 'url("./bg.png")'}} className="App">
      <NavigationBar />
      <HeroSection />
      <Footer />
      {/* <Dashboard /> */}
      
    </div>
  );
}

export default App;
