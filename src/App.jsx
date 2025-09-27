import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import Banner from "./components/Banner";
import Projects from "./components/Projects";

function App() {
  return (<div>
    <Navbar />
    {/* <HomePage /> */}
    <Banner />
    <Projects />
    </div>);
}

export default App;
