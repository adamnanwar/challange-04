import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Detailmvs from "./Detailmvs"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/detail/:detailId" element={<Detailmvs />} />
  </Routes>
</Router>
);