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
import Baby from "./pages/baby";
import BabyShower from "./pages/babyshower";
import Contact from "./pages/contact";
import Food from "./pages/food";
import PreWed from "./pages/prewed";
import Jewellery from "./pages/jewellery";
import About from "./pages/about";
import Maternity from "./pages/maternity";

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
        <Route path="/baby" element={<Baby />} />
        <Route path="/babyshower" element={<BabyShower />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/food" element={<Food />} />
        <Route path="/prewed" element={<PreWed />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/about" element={<About />} />
        <Route path="/maternity" element={<Maternity />} />
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
