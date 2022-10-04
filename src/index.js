import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PersistentDrawerLeft from "./components/sidebar";
import HeadMain from "./components/head";
import FooterMain from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Potraits from "./pages/potraits";
import Call from "./components/callIcon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersistentDrawerLeft />
    <HeadMain />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="/potraits" element={<Potraits />} />
      </Routes>
    </BrowserRouter>

    <br />
    <br />
    <br />
    <Call />
    <FooterMain />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
