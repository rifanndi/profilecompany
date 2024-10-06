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
      <div>
        <Routes>
          <Route path="/" element={<Catalog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
