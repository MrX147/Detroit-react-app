import React, { useContext } from "react";
import "./NavBar.css";
import { ThemeContext } from "./context/theme-context";
import DarkLightButton from "./DarkLightButton";

export default function NavBar({ currentPage, handleNavLinkClick }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="my-container">
      <nav
        className={`my-navbar navbar navbar-expand-lg border border-primary ${
          theme === "dark" ? "navbar navbar-dark bg-dark" : "text-dark "
        }}`}
      >
        <div className={`container-fluid`}>
          <a
            className="navbar-brand"
            href="/"
            onClick={() => handleNavLinkClick("home")}
          >
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    currentPage === "home" ? "active shadow-sm rounded" : ""
                  }`}
                  aria-current="page"
                  href="/home"
                  onClick={(e) => handleNavLinkClick("home", e)}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    currentPage === "about" ? "active shadow-sm rounded" : ""
                  }`}
                  aria-current="page"
                  href="/about"
                  onClick={(e) => handleNavLinkClick("about", e)}
                >
                  About
                </a>
              </li>

              <li
                className={`nav-item dropdown ${
                  currentPage === "dha" ? "active shadow-sm rounded" : ""
                }`}
              >
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/dha"
                      onClick={(e) => {
                        handleNavLinkClick("dha", e);
                      }}
                    >
                      Dha Valley Islamabad
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <DarkLightButton />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
