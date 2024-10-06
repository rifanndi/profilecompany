import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Lizard1 from "./components/konten2";
import Lizard2 from "./components/konten1";
import Lizard3 from "./components/konten3";
import Catalog from "./catalog";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lizard1" element={<Lizard1 />} />
        <Route path="/lizard2" element={<Lizard2 />} />
        <Route path="/lizard3" element={<Lizard3 />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
