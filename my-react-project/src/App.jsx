import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Features from "./Features";
import Enterprise from "./Enterprise";
import Support from "./Support";

function App() {
  return (
    <div style={{ padding: "0 20px", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Header />
      <div style={{ textAlign: "center", margin: "20px 0", flex: 1 }}>
        <Features />
      </div>
      <Footer />
    </div>
  );
}

export default App;
