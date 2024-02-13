import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState("");

  useEffect(() => {
    const handleScrool = () => {
      window.scrollY < 50 ? setScrolled("py-4") : setScrolled("");
    };
    window.addEventListener("scroll", handleScrool);
    return () => {
      window.removeEventListener("scroll", handleScrool);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled} ${style.bgMain}`}
    >
      <div className="container">
        <Link className="navbar-brand text-white fs-2 fw-bold" to="/">
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item py-2 text-center">
              <Link
                className={`nav-link text-uppercase text-white fw-bold mx-2 rounded-3 ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to={"about"}
              >
                About
              </Link>
            </li>
            <li className="nav-item py-2 text-center">
              <Link
                className={`nav-link text-uppercase text-white fw-bold mx-2 rounded-3 ${
                  location.pathname === "/portfolio" ? "active" : ""
                }`}
                to={"portfolio"}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item py-2 text-center">
              <Link
                className={`nav-link text-uppercase text-white fw-bold mx-2 rounded-3 ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to={"contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
