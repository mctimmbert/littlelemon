import { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-container">
        <a href="/">
          <div className="title-wrapper">
            <div className="title">
              <span className="site-title">Little Lemon</span>
            </div>
            <div className="site-subtitle"></div>
          </div>
        </a>

        <nav className="nav-links">
          <ul className={isOpen ? "nav-links-open" : ""}>
            <li>
              <a href="/work" onClick={() => setIsOpen(false)}>
                Menu
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => setIsOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                RESERVE A TABLE
              </Button>
            </li>
          </ul>
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
