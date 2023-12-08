import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import Curriculum from "./components/pages/Curriculum";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/contacts" exact Component={Contacts}></Route>
          <Route path="/cv" exact Component={Curriculum}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;