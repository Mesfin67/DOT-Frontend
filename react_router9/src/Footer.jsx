import React from "react";

function Footer() {
  return (
    <footer className="d-flex justify-content-around align-items-center border-top py-3 mt-auto">
      <div>
        <h5>Features</h5>
        <ul className="list-unstyled">
          <li>
            <a href="/coolstuff" className="text-decoration-underline">
              Cool stuff
            </a>
          </li>
          <li>Random feature</li>
          <li>Team feature</li>
        </ul>
      </div>
      <div>
        <h5>Resources</h5>
        <ul className="list-unstyled">
          <li>Resource</li>
          <li>Resource name</li>
        </ul>
      </div>
      <div>
        <h5>About</h5>
        <ul className="list-unstyled">
          <li>Team</li>
          <li>Locations</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
