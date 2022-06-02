import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
