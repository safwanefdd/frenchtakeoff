import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Ressources from "./pages/Ressources";
import CGV from "./pages/CGV";
import PDC from "./pages/PDC";
import Admin from "./pages/Admin";
import EnConstruction from "./pages/EnConstruction";
import TestNiveau from "./pages/TestNiveau";
import FormToGift from "./pages/FormToGift";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/651a430d784m362i399n5887849273473289" element={<Admin />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="/formulaire/:id" element={<FormToGift />} />
          <Route path="/test-de-niveau" element={<TestNiveau />} />
          <Route path="/construction" element={<EnConstruction />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/pdc" element={<PDC />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
