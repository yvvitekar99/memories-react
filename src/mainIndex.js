import React from "react";
import "./index.css";
import App from "./App";
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
import Cont from "./components/Cont";

const MainIndex = () => {
  return (
    <div>
      <PersistentDrawerLeft />
      <HeadMain />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<App />} />
          <Route path="/potraits" element={<Potraits />} />
          <Route path="/baby" element={<Baby />} />
          <Route path="/babyshower" element={<BabyShower />} />
          <Route path="/contact" element={<Cont />} />
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
    </div>
  );
};

export default MainIndex;
