import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Typical from "react-typical";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  nav- " data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1>Portfolio</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#adbout_me">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Certification/skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  ContactMe
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <Typical
                steps={[
                  "Crafting seamless digital experiences, one stack at a time.",
                  3000,
                  "Transforming ideas into elegant and functional code, from front-end to back-end",
                  3000,
                ]}
                loop={Infinity}
          
              />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
