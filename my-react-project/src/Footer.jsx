import React from "react";

function Footer() {
  return (
    <footer style={{ display: "flex", justifyContent: "space-around", padding: "20px 0", borderTop: "1px solid #ccc", marginTop: "auto" }}>
      <div>
        <h4>Features</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ textDecoration: "underline" }}>
            <a href="/coolstuff" style={{ color: "blue", fontWeight: "bold" }}>Cool stuff</a>
          </li>
          <li style={{ textDecoration: "underline" }}>Random feature</li>
          <li style={{ textDecoration: "underline" }}>Team feature</li>
        </ul>
      </div>
      <div>
        <h4>Resources</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ textDecoration: "underline" }}>Resource</li>
          <li style={{ textDecoration: "underline" }}>Resource name</li>
        </ul>
      </div>
      <div>
        <h4>About</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ textDecoration: "underline" }}>Team</li>
          <li style={{ textDecoration: "underline" }}>Locations</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
