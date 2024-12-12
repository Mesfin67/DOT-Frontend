import React from "react";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h1 style={{ margin: "20px" }}>Company Name</h1>
      <nav>
        <a href="/" style={{ margin: "0 10px" }}>Home</a>
        <a href="/features" style={{ margin: "0 10px" }}>Features</a>
        <a href="/enterprise" style={{ margin: "0 10px" }}>Enterprise</a>
        <a href="/support" style={{ margin: "0 10px" }}>Support</a>
      </nav>
    </header>
  );
}

export default Header;
