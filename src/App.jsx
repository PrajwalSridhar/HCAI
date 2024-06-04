import React, { Component } from "react";
import "./App";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Pages/Navbar";
import { Motivation, Contact, Home,BiasAnalysis,SurveyResults,FinalResults } from "./Components/Pages/Index";

class App extends Component {
render() {
  return (
<div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Motivation" element={<Motivation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Bias_analysis" element={<BiasAnalysis />} />
        <Route path="/Survey_results" element={<SurveyResults />} />
        <Route path="/Final_results" element={<FinalResults />} />
      </Routes>
    </div>

  );
}
}
export default App;