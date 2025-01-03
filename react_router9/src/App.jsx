import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Features from "./Features";
import Enterprise from "./Enterprise";
import Support from "./Support";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Header />
        <div style={{ fontSize: "600px", flex: 1, overflow: "auto", marginTop: "60px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
