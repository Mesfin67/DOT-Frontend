import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
      <h2>Company Name</h2>
      <nav>
        <Link className="mx-2" to="/">
          Home
        </Link>
        <Link className="mx-2" to="/features">
          Features
        </Link>
        <Link className="mx-2" to="/enterprise">
          Enterprise
        </Link>
        <Link className="mx-2" to="/support">
          Support
        </Link>
      </nav>
    </header>
  );
}

export default Header;
