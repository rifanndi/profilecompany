import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Lizard1 from "./components/konten2";
import Lizard2 from "./components/konten1";
import Lizard3 from "./components/konten3";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/abadicharcoal-Charcoal-Briquette" element={<Lizard1 />} />
        <Route
          path="/abadicharcoal-ndonesia-Coconut-Charcoal-Briquette"
          element={<Lizard2 />}
        />
        <Route path="abadicharcoal-Lump-Charcoal" element={<Lizard3 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
