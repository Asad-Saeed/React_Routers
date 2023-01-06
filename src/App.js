import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Slider from "./Slider";
import About from "./About";
import Service from "./Service";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="About" element={<About />} />
            <Route path="Service" element={<Service />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
